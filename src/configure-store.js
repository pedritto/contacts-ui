import { createStore, compose } from 'redux';

import DevTools from './dev-tools';
import reducers from './reducers';

const configureStore = (preloadedState) => {
  return createStore(
    reducers,
    preloadedState,
    compose(
      DevTools.instrument()
    )
  );
};

export default configureStore;
