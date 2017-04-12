import thunkMiddleware from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import DevTools from './dev-tools';
import reducers from './reducers';

const configureStore = (preloadedState) => {
  return createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware),
      DevTools.instrument()
    )
  );
};

export default configureStore;
