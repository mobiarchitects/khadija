import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getJwToken } from '../utils/getJwToken';

export const fetchSituationsProjects = createAsyncThunk(
  'situationsProjects/fetchSituationsProjects',
  async () => {
    const response = await axios.get(
      'http://rh-api-dev-mobiarchitects.azurewebsites.net/api/refsituationsproject',   { headers: getJwToken() },
    );
    return response.data.data;
  },
);

export const situationsProjectsSlice = createSlice({
  name: 'situationsProjects',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchSituationsProjects.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    },
    [fetchSituationsProjects.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSituationsProjects.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default situationsProjectsSlice.reducer;
