import axios from 'axios';

const market = axios.create({
  baseURL: 'http://localhost:8080/api',
});

const BEARER = 'Bearer ';

market.interceptors.request.use(function (config) {
  const user = localStorage.getItem('user');
  if (!user) {
    config.headers['Authorization'] = null;
    config.headers['refreshToken'] = null;
    return config;
  }
  const { accessToken, refreshToken } = JSON.parse(user);
  config.headers['Authorization'] = BEARER + accessToken;
  config.headers['refreshToken'] = BEARER + refreshToken;
  return config;
});

market.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 403) {
      try {
        const originalRequest = error.config;
        const data = await market.get('/renew');
        if (data) {
          console.log(data);
          localStorage.removeItem('user');
          localStorage.setItem('user', JSON.stringify(data.data));

          const user = localStorage.getItem('user');
          const { accessToken, refreshToken } = JSON.parse(user);
          originalRequest.headers['Authorization'] = BEARER + accessToken;
          originalRequest.headers['refreshToken'] = BEARER + refreshToken;

          // originalRequest.headers['Authorization'] = BEARER + accessToken;
          // originalRequest.headers['refreshToken'] = BEARER + refreshToken;
          return await market.request(originalRequest);
        }
      } catch (error) {
        // localStorage.removeItem('user');
        console.log(error);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default market;
