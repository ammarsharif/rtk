const configureStore = require('@reduxjs/toolkit').configureStore;
const carReducer = require('../features/car/car');
const bikeReducer = require('../features/bike/bike');
const userReducer = require('../features/user/user');
// const reduxLogger = require('redux-logger');

// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    car: carReducer,
    bike: bikeReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk),
});
module.exports = store;
