import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};
const loginData = createSlice({
  name: 'loginData',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export default loginData.reducer;
export const { login, logout } = loginData.actions;
