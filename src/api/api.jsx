import axios from 'axios';
const { REACT_APP_BASE_URL } = process.env;

const Api = axios.create({
  baseURL: `${REACT_APP_BASE_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401 || error?.response?.status === 500) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default Api;
