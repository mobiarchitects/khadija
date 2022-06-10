import axios from 'axios';
export default axios.create({
  baseURL: 'http://rh-api-dev-mobiarchitects.azurewebsites.net',
  headers: {
    'Content-type': 'application/json',
  },
});
