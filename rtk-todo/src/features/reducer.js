import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};
const task = {
  description: '',
  userId: '',
  id: '',
  completed: true,
};
const listData = createSlice({
  name: 'listData',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    updateTask: (state, action) => {
      const { userId, text } = action.payload;
      const index = state.list.findIndex((item) => item.userId === userId);

      if (index !== -1) {
        const updatedTask = { ...state.list[index], text };
        state.list[index] = updatedTask;
      }
    },

    deleteTask: (state, action) => {
      const itemToDel = action.payload;
      console.log(itemToDel);
      state.list = state.list.filter((item) => item.userId !== itemToDel);
    },
  },
});
export default listData.reducer;
export const { addTask, deleteTask, updateTask } = listData.actions;
