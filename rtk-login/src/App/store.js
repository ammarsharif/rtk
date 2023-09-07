import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/reducer/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

// const rootReducer = {
//   user: userReducer,
// };

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), //For Error Prevention
});

export const persistor = persistStore(store);

export default store;
