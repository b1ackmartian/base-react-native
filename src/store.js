import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import navigation from './reducers/navigation';

const identity = x => x;

const logger = createLogger();

const createStoreWithMiddleWare = applyMiddleware(
  thunk,
  __DEV__ ? logger : identity
)(createStore);

const reducer = combineReducers({
  navigation,
});

export default () => createStoreWithMiddleWare(reducer);