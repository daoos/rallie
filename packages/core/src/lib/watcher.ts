import { StoresType } from '../types'; // eslint-disable-line

export class Watcher {
  private namespace: string;
  private stores: StoresType;
  public oldWatchingStates: any;
  public handler: (watchingStates: any, oldWatchingStates: any) => any;
  public stopEffect: () => void;

  constructor (namespace: string, stores: StoresType) {
    this.namespace = namespace
    this.stores = stores
    this.stores[namespace].watchers.push(this)
  }

  public do<T = any> (handler: (watchingStates: T, oldWatchingStates?: T) => any) {
    this.handler = handler
    return () => this.unwatch()
  }

  public unwatch () {
    this?.stopEffect()
    this.handler = null
    const index = this.stores[this.namespace].watchers.indexOf(this)
    index !== -1 && this.stores[this.namespace].watchers.splice(index, 1)
  }
}
