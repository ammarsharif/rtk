import { createSlice } from '@reduxjs/toolkit';
import { ordered as bikeOrdered } from '../bike/bike';
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
    builder.addCase(bikeOrdered, (state) => {
      state.numberOfCars--;
    });
  },
});
export default carManager.reducer;
export const { ordered, stocked } = carManager.actions;
