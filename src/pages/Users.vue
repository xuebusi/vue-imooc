<script setup>
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

const cookie = useCookies()
console.log(cookie);

const token = ref('')

// 设置Cookie
function set() {
  cookie.set('admin-token', '123456')
  token.value = '123456'
}

// 读取Cookie
function get() {
  const adminToken = cookie.get('admin-token')
  console.log('>>>token:', adminToken);
  token.value = adminToken
}

// 删除Cookie
function remove() {
  cookie.remove('admin-token')
  token.value = ''
}

</script>

<template>
  <h1 class="p-2">用户信息</h1>
  <br>
  <el-button @click="get">查看</el-button>
  <el-button @click="set">修改</el-button>
  <el-button @click="remove">删除</el-button>
  <br>
  <p>{{ token }}</p>
</template>

<style scoped></style>
