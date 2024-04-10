<template>
    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1">
                <ElemeFilled />
            </el-icon>
            骏马编程
        </span>

        <el-icon class="icon-btn">
            <Fold />
        </el-icon>
        <el-icon class="icon-btn">
            <Refresh />
        </el-icon>

        <div class="ml-auto flex items-center">
            <el-icon class="icon-btn">
                <FullScreen />
            </el-icon>
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
                        <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup>
import api from '@/api'

import { ElMessage } from 'element-plus'
import { toast } from '@/util/common'
import { useRouter } from 'vue-router'
import { removeToken } from '@/util/auth'

const router = useRouter()

function logout() {
    api.logout()

    removeToken()

    router.push('/login')
    toast('退出登录成功')
}

const handleCommand = (command) => {
    if (command === 'changePassword') {
        ElMessage('点击了修改密码')
    } else if (command === 'logout') {
        logout()
    }
}
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