const store = require('./app/store');
const carActions = require('./features/car/car').carActions;
const bikeActions = require('./features/bike/bike').bikeActions;
const fetchUser = require('./features/user/user').fetchUser;

console.log('initial state', store.getState());
const unSubscribe = store.subscribe(() => {
  console.log('Updated State', store.getState());
});

store.dispatch(fetchUser());
// store.dispatch(carActions.ordered());
// store.dispatch(carActions.ordered());
// store.dispatch(carActions.stocked(7));
// store.dispatch(bikeActions.ordered());
// store.dispatch(bikeActions.ordered());
// store.dispatch(bikeActions.stocked(2));
// store.dispatch(bikeActions.ordered());

// unSubscribe();
