import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'data',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), //For Error Prevention
});
export const persistor = persistStore(store);

export default store;
