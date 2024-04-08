import { useCookies } from '@vueuse/integrations/useCookies'

const cookie = useCookies()

const tokenKey = 'admin-token'

const auth = {
    // 设置Token
    setToken: (token) => {
        cookie.set(tokenKey, token)
    },
    // 获取Token
    getToken: () => {
        return cookie.get(tokenKey)
    },
    // 移除Token
    removeToken: () => {
        cookie.remove(tokenKey)
    }
}

export default auth;