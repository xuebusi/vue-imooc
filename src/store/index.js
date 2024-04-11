import { createStore } from 'vuex'
import api from '@/api'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            user: {},
            // 侧边栏宽度
            asideWidth: '250px',
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        // 侧边栏展开或收起
        handleAsideWidth(state) {
            state.asideWidth = state.asideWidth == '250px' ? '64px' : '250px'
        },
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