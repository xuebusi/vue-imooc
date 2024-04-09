import { createStore } from 'vuex'
import api from '../api'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            user: {}
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        // 获取登录用户信息
        getinfo({ commit }) {
            return new Promise((resolve, reject) => {
                api.getinfo().then(res => {
                    commit('setUser', res)
                    resolve(res)
                }).catch(err => reject(err))
            })
        }
    }
})

export default store;