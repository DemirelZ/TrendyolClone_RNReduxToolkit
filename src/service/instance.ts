import axios from 'axios';
import {BASE_URL} from './URL';

const Client = axios.create();

Client.defaults.baseURL = BASE_URL;

Client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export {Client};
