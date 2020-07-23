import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import reducer from './reducers';

export const history = createBrowserHistory();

const configureStore = (preloadedState) => {
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  return createStore(
    reducer(history),
    preloadedState,
    compose(
      ...enhancers,
      applyMiddleware(
        routerMiddleware(history),
        thunk
      ),
    )
  );
};

export default configureStore;
