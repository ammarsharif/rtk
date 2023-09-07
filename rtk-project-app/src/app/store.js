import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/car';
import bikeReducer from '../features/bike/bike';
import userReducer from '../features/user/user';
// const reduxLogger = require('redux-logger');

// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    gari: carReducer,
    bike: bikeReducer,
    users: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk),
});
export default store;
