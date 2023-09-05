const redux = require('redux');
const { default: thunk } = require('redux-thunk');
const reduxThunk = require('redux-thunk');
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

//Action
const initialState = {
  loading: true,
  data: [],
  error: '',
};

const FETCH_DATA = 'FETCH_DATA';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};
const fetchSuccess = (payload) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload,
  };
};
const fetchFailed = (payload) => {
  return {
    type: FETCH_DATA_FAILED,
    payload,
  };
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_DATA_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

//Store

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchData());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data.map((user) => user.id);
        return dispatch(fetchSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUser());
