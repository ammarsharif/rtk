const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numberOfBikes: 12,
};

const bikeManager = createSlice({
  name: 'Bike',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfBikes--;
    },
    stocked: (state, actions) => {
      state.numberOfBikes += actions.payload;
    },
  },
});

module.exports = bikeManager.reducer;
module.exports.bikeActions = bikeManager.actions;
