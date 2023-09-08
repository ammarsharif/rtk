import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loggedInUser: {},
};
const loginData = createSlice({
  name: 'Sign In',
  initialState,
  reducers: {
    signUp: (state, action) => {
      const oldUsers = state.users ?? [];
      state.users = [...oldUsers, action.payload];
    },
    login: (state, action) => {
      state.loggedInUser = action.payload;
      console.log(action.payload);
    },
    logout: (state) => {
      state.loggedInUser = {};
    },
    deleteArrow: (state, action) => {
      const userIdToDelete = action.payload;
      console.log(userIdToDelete);
      console.log(state.users, 'users');
      state.users = state.users.filter(
        (user) => user.userId !== userIdToDelete
      );
      state.loggedInUser = {};
    },
  },
});

export default loginData.reducer;
export const { login, logout, signUp, deleteArrow } = loginData.actions;
