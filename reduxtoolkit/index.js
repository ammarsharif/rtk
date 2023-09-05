// const redux = require('redux');
// const createStore = redux.createStore;
// const bindActionCreators = redux.bindActionCreators;
// const ORDER_CAR = 'ORDER_CAR';
// //Actions
// const orderCar = (payload = 1) => {
//   return {
//     type: ORDER_CAR,
//     payload,
//   };
// };

// //Reducers
// const initialState = {
//   numberOfCars: 12,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ORDER_CAR:
//       return {
//         ...state,
//         numberOfCars: state.numberOfCars - 1,
//       };
//     default:
//       return state;
//   }
// };

// //Store
// const store = createStore(reducer);
// console.log('initial state', store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log('updated state', store.getState())
// );
// const actions = bindActionCreators({ orderCar }, store.dispatch);
// actions.orderCar();
// unsubscribe();

const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const ORDER_CAR = 'ORDER_CAR';
const ADD_CAR = 'ADD_CAR';
const ADD_BIKE = 'ADD_BIKE';
const ORDER_BIKE = 'ORDER_BIKE';
////Actions
const orderCar = () => {
  return {
    type: ORDER_CAR,
    payload: 1,
  };
};
const addCar = (payload = 1) => {
  return {
    type: ADD_CAR,
    payload,
  };
};
const orderBike = () => {
  return {
    type: ADD_BIKE,
    payload: 1,
  };
};
const addBike = (payload = 1) => {
  return {
    type: ORDER_BIKE,
    payload,
  };
};

/////Reducers
const initialCarState = {
  numberOfCars: 15,
};
const initialBikeState = {
  numberOfBikes: 10,
};

const reducerCar = (state = initialCarState, action) => {
  switch (action.type) {
    case 'ORDER_CAR':
      return {
        ...state,
        numberOfCars: state.numberOfCars - 1,
      };
    case 'ADD_CAR':
      return {
        ...state,
        numberOfCars: state.numberOfCars + action.payload,
      };
    default:
      return state;
  }
};
const reducerBike = (state = initialBikeState, action) => {
  switch (action.type) {
    case 'ORDER_BIKE':
      return {
        ...state,
        numberOfBikes: state.numberOfBikes - 1,
      };
    case 'ADD_BIKE':
      return {
        ...state,
        numberOfBikes: state.numberOfBikes + action.payload,
      };
    default:
      return state;
  }
};

/////Redux Store
const WholeReducer = combineReducers({
  car: reducerCar,
  bike: reducerBike,
});

const store = createStore(WholeReducer, applyMiddleware(logger));
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators(
  { orderCar, addCar, orderBike, addBike },
  store.dispatch
);
actions.orderCar();
actions.orderCar();
actions.addCar(7);
actions.orderBike();
actions.orderBike();
actions.addBike(3);
unsubscribe();
