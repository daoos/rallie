import { createBus, getBus } from '../src/lib/createBus';
import nock from 'nock';
import cssCode from './test-apps/css';
import appACode from './test-apps/app-a';
import appInvalidCode from './test-apps/app-invalid';
import reactCode from './test-apps/react';
import { Errors } from '../src/lib/utils';

nock('https://cdn.obvious.com')
  .get('/assets/app-a.js')
  .reply(200, appACode)
  .get('/assets/app-a.css')
  .reply(200, cssCode)
  .get('/assets/react.js')
  .reply(200, reactCode);

nock('https://localhost')
  .get('/assets/app-invalid.js')
  .reply(200, appInvalidCode);

describe('Test the capability to load the resources of an app or lib', () => {
  const staticAssetsConfig = {
    'react': {
      js: [
        'https://cdn.obvious.com/assets/react.js'
      ],
      isLib: true
    },
    'app-a': {
      js: [
        'https://cdn.obvious.com/assets/app-a.js'
      ],
      css: [
        'https://cdn.obvious.com/assets/app-a.css'
      ]
    },
    'invalid-resource-app': {
      js: [
        'validFile.png'
      ],
      css: [
        '/invalidFile.png'
      ]
    }
  };

  window['appsLoadedFromLocalhost'] = [];

  const bus = createBus('testBus');
  bus.config({
    loadScriptByFetch: true,
    assets: staticAssetsConfig
  }).use(async (ctx, next) => {
    window['lastLoadingApp'] = ctx.name;
    await next();
  }).use(async (ctx, next) => {
    if (ctx.loadedFromLocalhost) {
      window['appsLoadedFromLocalhost'].push(ctx.name);
      const code = await ctx.fetchJs(`https://localhost/assets/${ctx.name}.js`);
      ctx.excuteCode(code);
    } else {
      await next();
    }
  });

  test('# case 1: create a bus, it should be mounted on window.__Bus__ ', () => {
    expect(getBus('testBus')).toBe(bus);
    expect(() => {
      window['__Bus__'].testBus = null;
    }).toThrowError();
  });

  test('# case 2: activate app-a, it should activate its dependencies and the bootstrap callback should be called', (done) => {
    console.log = jest.fn();
    bus.activateApp('app-a').then(() => {
      expect(window['React']).toEqual('reactSourceCode');
      expect(window['lastLoadingApp']).toEqual('react');
      expect(console.log).toBeCalledWith('bootstraped');
      expect(window['appsLoadedFromLocalhost'].length).toEqual(0);
      done();
    });
  });

  test('# case 3: activate app-invalid, the middleware should be excuted', (done) => {
    console.log = jest.fn();
    bus.activateApp({
      name: 'app-invalid',
      loadedFromLocalhost: true
    }).then(() => {
      throw new Error('this callback should not be reached');
    }).catch((error) => {
      expect(error.message).toEqual(Errors.appNotCreated('app-invalid'));
      expect(window['appsLoadedFromLocalhost'][0]).toEqual('app-invalid');
      expect(window['lastLoadingApp']).toEqual('app-invalid');
      expect(console.log).toBeCalledWith('app-invalid loaded');
      done();
    });
  });

  test('# case 4: activate an app which does not have valid resource declaration, console.error should be called', (done) => {
    console.error = jest.fn();
    bus.activateApp('invalid-resource-app').then(() => {
      throw new Error('this callback should not be reached');
    }).catch((error) => {
      expect(console.error).toBeCalledTimes(2);
      expect(error.message).toEqual(Errors.appNotCreated('invalid-resource-app'));
      done();
    });
  });

  test('# case 5: activate an non-existence app, an error should be throwed', (done) => {
    const bus = createBus('testBus2');
    bus.activateApp('non-existence-app').then(() => {
      throw new Error('this callback should not be reached');
    }).catch((error) => {
      expect(error.message).toEqual(Errors.resourceNotDeclared('non-existence-app', 'testBus2'));
      done();
    });
  });
});
