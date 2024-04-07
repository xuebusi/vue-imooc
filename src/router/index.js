import { createRouter, createWebHashHistory } from 'vue-router'

import NotFound from '@/pages/404.vue'
// import Login from '@/pages/login.vue'
import Login from '@/pages/login2.vue'
import Register from '@/pages/register.vue'
import Home from '@/pages/home.vue'
import News from '@/pages/news.vue'
import Users from '@/pages/users.vue'
import Detail from '@/pages/detail.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
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
    { path: '/users', component: Users },
    // 404页面
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;