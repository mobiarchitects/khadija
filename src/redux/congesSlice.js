import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getJwToken } from '../utils/getJwToken';

export const fetchConges = createAsyncThunk('conges/fetchConges', async () => {
  const response = await axios.get(
    'http://rh-api-dev-mobiarchitects.azurewebsites.net/api/leaves/getprofilleaves',
    { headers: getJwToken() },
  );

  return response.data.data;
});

export const congesSlice = createSlice({
  name: 'conges',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchConges.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = action.payload.succeeded;
    },
    [fetchConges.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchConges.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default congesSlice.reducer;
