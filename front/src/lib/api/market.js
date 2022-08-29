import axios from 'axios';

const market = axios.create();

market.defaults.baseURL = 'http://localhost:8080/api';
// 헤더 설정
// client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
// 인터셉터 설정

export default market;
