import request from '@/util/request.js'

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
    },
    // 退出登录
    logout() {
        request.post('/admin/logout')
    },
    // 修改密码
    updatePassword(data) {
        return request.post('/admin/updatePassword', data)
    }
}

export default api;