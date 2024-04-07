import axios from "axios";
import querystring from "querystring";

// 创建axios实例
const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
});

const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址有误");
            break;
        case 500:
            console.log("服务器异常");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);

    }
}

// 请求拦截器
instance.interceptors.request.use(
    config => {
        if (config.method == 'post') {
            config.data = querystring.stringify(config.data)
        }
        // config包含了网络请求的所有信息
        return config;
    },

    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        return response.status == 200 ? Promise.resolve(response) : Promise.reject(response);
    },

    error => {
        const { response } = error;
        errorHandle(response.status, response.info);
    }
)

export default instance;
