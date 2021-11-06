import { EventEmitter } from './event-emitter'
import { Socket } from './socket'
import { App } from './app'
import { Errors, compose, getNameFromCtx } from './utils'
import loader from './loader'
import { MiddlewareFnType, ContextType, NextFnType, ConfType, CustomCtxType, StoresType } from '../types'; // eslint-disable-line

export class Bus {
  private name: string
  private eventEmitter: EventEmitter = new EventEmitter()
  private stores: StoresType = {}
  private apps: Record<string, App | boolean> = {}
  private dependencyDepth = 0

  private conf: ConfType = {
    maxDependencyDepth: 100,
    loadScriptByFetch: false,
    assets: {}
  };

  private middlewares: MiddlewareFnType[] = []
  private composedMiddlewareFn: (ctx: ContextType, next: NextFnType) => Promise<any>

  public state: Record<string, any>

  constructor (name: string) {
    this.name = name
    this.composedMiddlewareFn = compose(this.middlewares)
  }

  private isRallieCoreApp (appName: string) {
    return this.apps[appName] && typeof this.apps[appName] !== 'boolean'
  }

  /**
   * config the bus
   * @param conf the new configuration object
   */
  public config (conf: Partial<ConfType>) {
    this.conf = {
      ...this.conf,
      ...conf,
      assets: {
        ...this.conf.assets,
        ...(conf?.assets || {})
      }
    }
    return this
  }

  /**
   * register the middleware
   * @param middleware
   */
  public use (middleware: MiddlewareFnType) {
    if (typeof middleware !== 'function') {
      throw new Error(Errors.wrongMiddlewareType())
    }
    this.middlewares.push(middleware)
    this.composedMiddlewareFn = compose(this.middlewares)
    return this
  }

  /**
   * create the context to pass to the middleware
   * @param ctx
   * @returns
   */
  private createContext (ctx: CustomCtxType) {
    let context: ContextType = {
      name: '',
      loadScript: loader.loadScript,
      loadLink: loader.loadLink,
      fetchScript: loader.fetchScript,
      excuteCode: loader.excuteCode,
      conf: this.conf
    }
    const appName: string = typeof ctx === 'string' ? ctx : ctx.name
    if (appName) {
      if (typeof ctx !== 'string') {
        context = {
          ...context,
          ...ctx
        }
      }
      context.name = appName
    } else {
      throw new Error(Errors.wrongContextType())
    }
    return context
  }

  /**
   * the core middleware
   * @param ctx the context
   */
  private async loadResourcesFromAssetsConfig (ctx: ContextType) {
    const {
      name,
      loadScript = loader.loadScript,
      loadLink = loader.loadLink,
      fetchScript = loader.fetchScript,
      excuteCode = loader.excuteCode,
      conf = this.conf
    } = ctx
    const { assets, loadScriptByFetch } = conf
    if (assets[name]) {
      // insert link tag first
      assets[name].css &&
        assets[name].css.forEach((asset) => {
          const href = typeof asset === 'string' ? asset : asset.href
          if (/^.+\.css$/.test(href)) {
            loadLink(asset)
          } else {
            console.error(Errors.invalidResource(href))
          }
        })
      // load and execute js
      if (assets[name].js) {
        for (const asset of assets[name].js) {
          const src = typeof asset === 'string' ? asset : asset.src
          if (/^.+\.js$/.test(src)) {
            if (!loadScriptByFetch) {
              await loadScript(asset)
            } else {
              const code = await fetchScript(src)
              code && excuteCode(code)
            }
          } else {
            console.error(Errors.invalidResource(src))
          }
        }
      }
    } else {
      throw new Error(Errors.resourceNotDeclared(name, this.name))
    }
  }

  /**
   * create a socket
   * @return the socket instance
   */
  public createSocket () {
    return new Socket(this.eventEmitter, this.stores)
  }

  /**
   * return true if an app is created
   */
  public existApp (name: string) {
    return !!this.apps[name]
  }

  /**
   * create an app
   * @param name the name of the app
   * @return the app instance
   */
  public createApp (name: string) {
    if (this.existApp(name)) {
      throw new Error(Errors.createExistingApp(name))
    }
    const app = new App(name)
    this.apps[name] = app
    return app
  }

  /**
   * load the resources of an app
   * @param ctx
   */
  public async loadApp (ctx: CustomCtxType) {
    const context = this.createContext(ctx)
    const appName = context.name
    if (!this.apps[appName]) {
      // apply the middlewares
      await this.composedMiddlewareFn(context, this.loadResourcesFromAssetsConfig.bind(this))
      const isLib = appName.startsWith('lib:')
      if (isLib && !this.apps[appName]) {
        this.apps[appName] = true
      }
      if (!this.apps[appName]) {
        throw new Error(Errors.appNotCreated(appName))
      }
    }
  }

  /**
   * activate an app
   * @param name
   * @param config
   */
  public async activateApp<T = any> (ctx: CustomCtxType, config?: T) {
    const name = getNameFromCtx(ctx)
    await this.loadApp(ctx)
    if (this.isRallieCoreApp(name)) {
      const app = this.apps[name] as App
      await app.loadRelatedApps(this.loadApp.bind(this))
      if (!app.bootstrapped) {
        if (this.dependencyDepth > this.conf.maxDependencyDepth) {
          this.dependencyDepth = 0
          throw new Error(Errors.bootstrapNumberOverflow(this.conf.maxDependencyDepth))
        }
        this.dependencyDepth++
        await app.activateDependenciesApp(this.activateApp.bind(this))
        if (app.doBootstrap) {
          await Promise.resolve(app.doBootstrap(config))
        } else if (app.doActivate) {
          await Promise.resolve(app.doActivate(config))
        }
        app.bootstrapped = true
        this.dependencyDepth--
      } else {
        app.doActivate && (await Promise.resolve(app.doActivate(config)))
      }
    }
  }

  /**
   * destroy an app
   * @param name
   * @param config
   */
  public async destroyApp<T = any> (name: string, data?: T) {
    if (this.isRallieCoreApp(name)) {
      const app = this.apps[name] as App
      app.doDestroy && (await Promise.resolve(app.doDestroy(data)))
      app.bootstrapped = false
      app.dependenciesReady = false
    }
  }
}

const busProxy = {}
export const DEFAULT_BUS_NAME = 'DEFAULT_BUS'
/**
 * create a bus and record it on window.RALLIE_BUS_STORE
 * @param name the name of the bus
 */
export const createBus = (name: string = DEFAULT_BUS_NAME) => {
  if (window.RALLIE_BUS_STORE === undefined) {
    Reflect.defineProperty(window, 'RALLIE_BUS_STORE', {
      value: busProxy,
      writable: false
    })
  }

  if (window.RALLIE_BUS_STORE[name]) {
    throw new Error(Errors.duplicatedBus(name))
  } else {
    const bus = new Bus(name)
    Reflect.defineProperty(window.RALLIE_BUS_STORE, name, {
      value: bus,
      writable: false
    })
    return bus
  }
}

/**
 * get the bus from window.RALLIE_BUS_STORE
 * @param name the name of the bus
 * @returns
 */
export const getBus = (name: string = DEFAULT_BUS_NAME) => {
  return window.RALLIE_BUS_STORE && window.RALLIE_BUS_STORE[name]
}

/**
 * get the bus from window.RALLIE_BUS_STORE, if the bus is not created, then create it
 * @param name the name of the bus
 * @returns
 */
export const touchBus = (name: string = DEFAULT_BUS_NAME): [Bus, boolean] => {
  let bus: Bus = null
  let isHost: boolean = false
  const existedBus = getBus(name)
  if (existedBus) {
    bus = existedBus
    isHost = false
  } else {
    bus = createBus(name)
    isHost = true
  }
  return [bus, isHost]
}
