import { createSlice } from '@reduxjs/toolkit';
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

export default bikeManager.reducer;
export const { ordered, stocked } = bikeManager.actions;
