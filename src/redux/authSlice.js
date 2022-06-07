import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postConnection = createAsyncThunk(
  'post/postConnection',
  async (valObject) => {
    console.log(valObject);
    const response = await axios.post(
      'http://rh-api-dev-mobiarchitects.azurewebsites.net/api/Account/Authenticate',
      valObject,
    );
    return console.log(response.data);
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
  },
  reducers: {},
  extraReducers: {
    [postConnection.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLogged = action.payload.succeeded;
    },
    [postConnection.pending]: (state) => {
      state.isLogged = 'loading';
    },
    [postConnection.rejected]: (state) => {
      state.isLogged = 'failed';
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
