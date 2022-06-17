import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getJwToken } from '../utils/getJwToken';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const response = await axios.get(
      'http://rh-api-dev-mobiarchitects.azurewebsites.net/api/projects/getprojects',   { headers: getJwToken() },
    );
    return response.data.data;
  },
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProjects.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    },
    [fetchProjects.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProjects.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default projectsSlice.reducer;
