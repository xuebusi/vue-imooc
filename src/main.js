import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/style/common.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'virtual:windi.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import { createPinia } from 'pinia'
// const pinia = createPinia()
import store from './store'

const app = createApp(App);
app.use(router)
// app.use(pinia)
app.use(store)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
