import { useCookies } from '@vueuse/integrations/useCookies'

const cookie = useCookies()

const tokenKey = 'admin-token'

// 设置Token
export function setToken(token) {
    cookie.set(tokenKey, token)
}
// 获取Token
export function getToken() {
    return cookie.get(tokenKey)
}
// 移除Token
export function removeToken() {
    cookie.remove(tokenKey)
}