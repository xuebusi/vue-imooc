import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/pages/404.vue'
import Login from '@/pages/login2.vue'
import Register from '@/pages/register.vue'
import Home from '@/pages/home.vue'
import News from '@/pages/news.vue'
import Users from '@/pages/users.vue'
import Detail from '@/pages/detail.vue'
import Admin from '@/layout/admin.vue'
import GoodsList from '@/pages/goods/list.vue'

const routes = [
    {
        path: '/',
        component: Admin,
        children: [{
            path: '/',
            component: Home,
            meta: {
                title: '首页'
            }
        }, {
            path: '/users',
            component: Users,
            meta: {
                title: '用户'
            }
        }, {
            path: '/goods/list',
            component: GoodsList,
            meta: {
                title: '商品管理'
            }
        },]
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            title: '注册'
        }
    },
    {
        path: '/news',
        component: News,
        children: [{
            name: 'detail',
            path: 'detail/:title/:content?',
            component: Detail,
            props: true,
        }]
    },
    // 404页面
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '错误页面'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;