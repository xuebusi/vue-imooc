<template>
    <el-row class="min-h-screen bg-indigo-500">
        <el-col :lg="16" :md="12" class="flex items-center justify-center">
            <div>
                <div class="font-bold text-5xl text-light-50 mb-4">欢迎光临</div>
                <div class="text-gray-200 text-sm">此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="bg-light-50 flex items-center justify-center flex-col">
            <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
            <div class="flex items-center justify-center my-4 text-gray-300 space-x-2">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span class="">账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-200"></span>
            </div>
            <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password>
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[250px]" type="primary" @click="doLogin">登 录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'
import { ref, reactive } from 'vue'
import api from '@/api'

const router = useRouter()

const cookie = useCookies()
console.log(cookie);

// do not use same name with ref
const form = reactive({
    username: 'admin',
    password: '123456',
})

const formRef = ref()
const rules = ref({
    username: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        }
    ]
})

const doLogin = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return false
        }
        api.login(form.username, form.password)
            .then(res => {
                console.log(res.data.data);
                // 设置Cookie
                cookie.set('admin-token', res.data.data)

                ElNotification({
                    message: '登录成功',
                    type: 'success',
                    duration: 3000,
                })
                router.push('/')
            })
    })
}
</script>

<style scoped></style>