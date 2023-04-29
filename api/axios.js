import Axios from 'axios';

const API_BASE_URL = 'https://agapi-test.altogiro.net/api'

export const api = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
