import {
  getUserFail,
  getUserPending,
  getUserSuccess,
} from '../redux/userSlice';

export const getUserProfile = () => (dispatch) => {
  try {
      //call the api
      dispatch(getUserPending())
  } catch (error) {
    dispatch(getUserFail(error.message));
  }
};
