<template>
    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1">
                <ElemeFilled />
            </el-icon>
            骏马编程
        </span>

        <el-tooltip effect="dark" content="折叠" placement="bottom">
            <el-icon class="icon-btn">
                <Fold />
            </el-icon>
        </el-tooltip>

        <el-tooltip effect="dark" content="刷新" placement="bottom">
            <el-icon class="icon-btn" @click="handleRefresh">
                <Refresh />
            </el-icon>
        </el-tooltip>


        <div class="ml-auto flex items-center">
            <el-tooltip effect="dark" :content="isFullscreen ? '退出全屏' : '全屏'" placement="bottom">
                <el-icon v-if="!isFullscreen" class="icon-btn" @click="toggle">
                    <FullScreen />
                </el-icon>
                <el-icon v-else class="icon-btn" @click="toggle">
                    <Aim />
                </el-icon>
            </el-tooltip>

            <el-avatar class="ml-2" :size="25" src="https://avatars.githubusercontent.com/u/1?v=4" />

            <el-dropdown class="dropdown" @command="handleCommand">
                <span class="el-dropdown-link">
                    林克
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

    <!-- 修改密码抽屉 -->
    <el-drawer v-model="showDrawer" title="修改密码" size="40%" :close-on-click-modal="false">
        <el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
            <el-form-item prop="oldpassword" label="旧密码">
                <el-input v-model="form.oldpassword" placeholder="请输入旧密码">
                    <template #prefix>
                        <el-icon>
                            <Lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password" label="新密码">
                <el-input type="password" v-model="form.password" placeholder="请输入新密码" show-password>
                    <template #prefix>
                        <el-icon>
                            <Lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="repassword" label="确认密码">
                <el-input type="password" v-model="form.repassword" placeholder="请输入确认密码" show-password>
                    <template #prefix>
                        <el-icon>
                            <Lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="updatePassword" :loading="loading">提交</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>
<script setup>
import { ref, reactive } from 'vue'
import api from '@/api'

import { ElMessage } from 'element-plus'
import { toast } from '@/util/common'
import { useRouter } from 'vue-router'
import { removeToken } from '@/util/auth'

import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()

// 修改密码和退出登录
const handleCommand = (command) => {
    switch (command) {
        case 'rePassword':
            // ElMessage('点击了修改密码')
            showDrawer.value = true
            break;
        case 'logout':
            logout()
            break;
        default:
            break;
    }
}

const showDrawer = ref(false)

const form = reactive({
    oldpassword: '',
    password: '',
    repassword: '',
})

const formRef = ref()
const rules = ref({
    oldpassword: [
        {
            required: true,
            message: '旧密码不能为空',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '新密码不能为空',
            trigger: 'blur'
        }
    ],
    repassword: [
        {
            required: true,
            message: '确认密码不能为空',
            trigger: 'blur'
        }
    ]
})

const loading = ref(false)

// 修改密码
const updatePassword = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return false
        }
        // loading.value = true
        api.updatePassword(form)
            .then(res => {
                console.log('修改密码res ==>', res);
                removeToken()
                router.push('/login')
                toast('密码修改成功，请重新登录！')
            })
    })
}

const router = useRouter()

// 退出登录
function logout() {
    api.logout()

    removeToken()

    router.push('/login')
    toast('退出登录成功')
}

// 刷新
const handleRefresh = () => location.reload()
</script>
<style scoped>
.f-header {
    @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0;
    height: 64px;
}

.logo {
    width: 250px;
    @apply flex justify-center items-center text-xl font-thin;
}

.icon-btn {
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;
}

.icon-btn:hover {
    @apply bg-indigo-600;
}

.f-header .dropdown {
    height: 64px;
    cursor: pointer;
    @apply flex justify-center items-center text-light-50 mx-5;
}
</style>