import { loginFail, loginPending, loginSuccess } from '../redux/loginSlice';
import httpComm from './httpComm';

export const userLogin = (frmData) => async (dispatch) => {
  return await httpComm
    .post('/api/Account/Authenticate', frmData)
    .then((response) => {
      var result = response.data;
      dispatch(loginPending());
      if (result.succeeded === true) {
        localStorage.setItem('userData', JSON.stringify(result.data));
        dispatch(loginSuccess(result.data));
      } else if (result.succeeded === false) {
        dispatch(loginFail(result.data.message));
      }
    })
    .catch((e) => {
      let message = e.response?.data?.error;
      dispatch(loginFail(message));
    });
};
