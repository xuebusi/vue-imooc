import request from '../util/request.js'

const api = {
    // 测试请求
    getUsers() {
        return request.get('https://api.github.com/users');
    },
    // 登录
    login(username, password) {
        return request.post('/admin/login', {
            username,
            password
        })
    },
    // 获取用户信息
    getinfo() {
        return request.post('/admin/getinfo')
    }
}

export default api;