import axios from 'axios';

// 登入相關
const login = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});



// 登入
export const apiUserLogin = data => login.post('/login', data);

// 登出
export const apiUserLogout = data => login.post('/logout', data);

// 使用者
export const apiGetUser = data => login.get('/user', data);