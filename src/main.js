import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/style/common.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App);
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
