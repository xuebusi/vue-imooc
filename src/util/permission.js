import router from '@/router'
import { getToken } from '@/util/auth'
// import { toast } from '@/util/notification'

router.beforeEach((to, from, next) => {
    console.log('全局导航守卫');
    const token = getToken()
    console.log('>>>>token:', token);

    // 没有登录， 强制跳转到登录页
    if (!token && to.path != '/login') {
        // toast('请先登录', 'error')
        return next({ path: '/login' })
    }

    // 防止重复登录
    if (token && to.path == '/login') {
        // toast('请勿重复登录', 'error')
        return next({ path: from.path ? from.path : '/' })
    }

    next()
})