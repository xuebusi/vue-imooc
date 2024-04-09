<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()

const username = ref('')
const password = ref('')
const rememberMe = ref(false)

let isLogin = ref(false)

const login = () => {
    console.log('登录表单:', username.value, password.value, rememberMe.value);
    isLogin.value = true
    router.push({
        path: '/'
    })
}
</script>

<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-md-10 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="请输入用户名"
                            v-model="username">
                        <label for="floatingInput">用 户</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="请输入密码"
                            v-model="password">
                        <label for="floatingPassword">密 码</label>
                    </div>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" v-model="rememberMe"> 记住我
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" @click.prevent="login">登 录</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>