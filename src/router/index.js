import { createRouter, createWebHistory } from 'vue-router'

import LoginVue from '../pages/Login.vue'
import RegisterVue from '../pages/Register.vue'
import HomeVue from '../pages/Home.vue'
import NewsVue from '../pages/News.vue'
import UsersVue from '../pages/Users.vue'
import DetailVue from '../pages/Detail.vue'

const routes = [
    { path: '/', redirect: '/home'}, 
    { path: '/home', component: HomeVue },
    { path: '/login', component: LoginVue },
    { path: '/register', component: RegisterVue },
    {
        path: '/news',
        component: NewsVue,
        children: [{
            name: 'detail',
            path: 'detail/:title/:content?',
            component: DetailVue,
            props: true,
        }]
    },
    { path: '/users', component: UsersVue },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;