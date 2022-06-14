import { loginFail, loginPending, loginSuccess } from '../redux/loginSlice';
import httpComm from './httpComm';

export const userLogin = (frmData) => async (dispatch) => {
  return await httpComm
    .post('/api/Account/Authenticate', frmData)
    .then((response) => {
      var result = response.data;
      dispatch(loginPending());
      if (result.succeeded === true) {
        sessionStorage.setItem('userData', JSON.stringify(result.data));
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
//   return await (
//     await httpComm.post('/api/Account/Authenticate', frmData)

//     .then((result) => {
//       var result = response.data;
//       console.log(result);
//     })
//     .catch((err) => {});
//   // try {
//   //   const res = await ;
//   //   console.log(res.data.data);
//   //   resolve(res.data);

//   //   if (res.data.succeeded === true) {
//   //     sessionStorage.setItem('jwToken', res.data.data.jwToken);
//   //     localStorage.setItem(
//   //       'crmSite',
//   //       JSON.stringify({ refreshToken: res.data.data.refreshToken }),
//   //     );
//   //   }
//   // } catch (error) {
//   //   console.log(error.message);
//   //   reject(error);
//   // }
//   // });
// )};
