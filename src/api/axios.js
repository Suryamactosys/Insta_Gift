import axios from 'axios';
const BASE_URL = 'http://192.168.29.195:6565/insta-gift/user/';
// const REFRESH_URL = 'http://192.168.29.195:6565/insta-gift/token/refresh';

export var REFRESH_URL = 'http://192.168.29.195:6565/insta-gift/token/refresh';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});