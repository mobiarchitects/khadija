import httpComm from './httpComm';

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await httpComm.post('/api/Account/Authenticate', frmData);
      console.log(res);
      resolve(res.data);

      if (res.data.succeeded === true) {
        sessionStorage.setItem('jwToken', res.data.data.jwToken);
        localStorage.setItem(
          'crmSite',
          JSON.stringify({ refreshToken: res.data.data.refreshToken }),
        );
      }
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await httpComm.get('/api/Profils/GetProfils');
      console.log(res);
      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
