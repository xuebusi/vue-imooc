import axios from "axios";
import path from './path';

const api = {
    // 测试请求
    getUsers() {
        return axios.get(path.baseUrl + path.users);
    }
}

export default api;