import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  isAuth: false,
  error: '',
};
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginFail, loginPending, loginSuccess } = actions;
export default reducer;
