// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const {
    injectReducer,
    injectSagas,
    redirectToLogin
  } = getAsyncInjectors(store)

  return [
    {
      onEnter: redirectToLogin,
      path: '/jotform/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/jotform/login',
      name: 'loginContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/LoginContainer/reducer'),
          import('containers/LoginContainer/sagas'),
          import('containers/LoginContainer'),
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('loginContainer', reducer.default)
          injectSagas(sagas.default)
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      },
    },
    {
      onEnter: redirectToLogin,
      path: '/jotform/form/:id',
      name: 'jotform',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Form/reducer'),
          import('containers/Form/sagas'),
          import('containers/Form'),
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('jotform', reducer.default)
          injectSagas(sagas.default)
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      },
    }, {
      path: '/jotform/forget-password',
      name: 'forgetPassword',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ForgetPassword/reducer'),
          import('containers/ForgetPassword/sagas'),
          import('containers/ForgetPassword'),
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('forgetPassword', reducer.default)
          injectSagas(sagas.default)
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
