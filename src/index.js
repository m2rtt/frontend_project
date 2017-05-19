import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/index.js';
import App from './containers/App';
import serverMiddleware from './middlewares/Server';
import websocketMiddleware from './middlewares/Websockets.js';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';

// `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` will make sure that redux devtools
// store enhancher is applied last so that it will not miss any actions. See
// http://redux.js.org/docs/api/applyMiddleware.html#tips for more information.
const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();

let store = createStore(
  connectRouter(history)(reducer), // Wrap top level reducer with `connectRouter`
  composeStoreEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      serverMiddleware,
      websocketMiddleware
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
