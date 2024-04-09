import router from '@/router'
import { getToken } from '@/util/auth'
import store from '@/store';
import toast from '@/util/notification'

router.beforeEach(async (to, from, next) => {
    console.log('全局导航守卫');
    const token = getToken()
    console.log('>>>>token:', token);

    // 没有登录， 强制跳转到登录页
    if (!token && to.path != '/login') {
        toast('请先登录', 'error')
        return next({ path: '/login' })
    }

    // 防止重复登录
    if (token && to.path == '/login') {
        toast('请勿重复登录', 'error')
        return next({ path: from.path ? from.path : '/' })
    }

    // 如何已经登录， 则自动获取用户信息，并存储在vuex中
    if(token) {
        await store.dispatch('getinfo')
    }

    next()
})