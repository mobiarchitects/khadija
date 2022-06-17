export const getJwToken = () => {
  const user = JSON.parse(localStorage.getItem('userData'));
  if (user && user.jwToken) {
    return { Authorization: 'Bearer ' + user.jwToken };
  }
};
