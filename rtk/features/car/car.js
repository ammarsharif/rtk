const createSlice = require('@reduxjs/toolkit').createSlice;
const { bikeActions } = require('../bike/bike');
const initialState = {
  numberOfCars: 10,
};

const carManager = createSlice({
  name: 'car',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCars--;
    },
    stocked: (state, action) => {
      state.numberOfCars += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(bikeActions.ordered, (state) => {
      state.numberOfCars--;
    });
  },
});
module.exports = carManager.reducer;
module.exports.carActions = carManager.actions;
