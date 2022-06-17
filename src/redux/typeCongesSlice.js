import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getJwToken } from '../utils/getJwToken';

export const fetchTypeConges = createAsyncThunk(
  'conges/fetchTypeConges',
  async () => {
    const response = await axios.get(
      'http://rh-api-dev-mobiarchitects.azurewebsites.net/api/reftypesleave',
      { headers: getJwToken() },
    );

    return response.data.data;
  },
);

export const typeCongesSlice = createSlice({
  name: 'typeConges',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTypeConges.fulfilled]: (state, action) => {
      state.data = action.payload;
      // state.status = 'success';
    },
    [fetchTypeConges.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchTypeConges.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default typeCongesSlice.reducer;
