const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');
const initialState = {
  loading: true,
  user: [],
  error: '',
};

const fetchUser = createAsyncThunk('user/fetchUser', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id));
});

const userData = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userData.reducer;
module.exports.fetchUser = fetchUser;
