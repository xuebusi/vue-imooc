import axios from "axios";

const api = {
    // 测试请求
    getUsers() {
        return axios.get('https://api.github.com/users');
    },
    // 登录
    login(username, password) {
        return axios.post('/admin/login', {
            username,
            password
        })
    }
}

export default api;