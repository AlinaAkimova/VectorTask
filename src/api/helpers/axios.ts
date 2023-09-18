import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://185.212.148.75:5000',
});

export default instance;