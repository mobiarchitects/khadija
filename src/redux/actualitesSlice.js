import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchActualites = createAsyncThunk(
  'fetch/fetchActualites',
  async () => {
    const response = await axios.get(
      'http://rh-api-dev-mobiarchitects.azurewebsites.net/api/news/getNews',
    );
    return response.data.data;
  },
);

export const actualitesSlice = createSlice({
  name: 'actualites',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchActualites.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = action.payload.succeeded;
    },
    [fetchActualites.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchActualites.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default actualitesSlice.reducer;
