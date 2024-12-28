<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const password2 = ref('')

const register = () => {
    console.log('注册表单', username.value, password.value, password2.value);
    router.push({
        path: '/login'
    })
}

</script>

<template>
    <div>
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-md-10 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="请输入用户名" v-model="username">
                        <label for="floatingInput">用户</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="请输入密码" v-model="password">
                        <label for="floatingPassword">密码</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="repeatPassword" placeholder="请再次输入密码" v-model="password2">
                        <label for="floatingPassword">确认密码</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" @click.prevent="register">注册</button>
                    <hr class="my-4">
                    <small class="text-body-secondary">单击“注册”即表示您同意使用条款。</small>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
