import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'jike',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState = {}) => {
  const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));

  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;

// export default function configureStore(initialState = {}) {
//   return createStore(reducer, initialState, applyMiddleware(thunk));
// }

// https://stackblitz.com/edit/redux-persist
