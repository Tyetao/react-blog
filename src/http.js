import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8090';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;

axios.interceptors.request.use(config => {
    // config.setHeaders([
    // ]);
    return config
});

axios.interceptors.response.use(response => {
    return response.data;
    // if (response.data.code === 200 || response.data.code === '200') {
    //     return response.data.data || response.data;
    // } else {
    //     // 非200请求抱错
    //     throw Error(response.data.msg || '服务异常');
    // }
});

export default axios;
