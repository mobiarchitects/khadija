import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCongePaginations = createAsyncThunk(
  'fetch/congePagination',
  async (numPage) => {
    console.log('num page : ', numPage);
    const response = await axios.get(
      'http://rh-api-dev-mobiarchitects.azurewebsites.net/api/leaves/GetAllLeaves?pageNumber=' +
        numPage +
        '&pageSize=1',
    );
    return response.data.data;
  },
);

const congePaginationSlice = createSlice({
  name: 'congePaginations',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCongePaginations.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = action.payload.succeeded;
    },
    [fetchCongePaginations.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCongePaginations.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default congePaginationSlice.reducer;
