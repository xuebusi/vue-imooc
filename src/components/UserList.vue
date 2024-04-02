<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'

const message = ref('用户列表')
const users = ref([])

onMounted(() => {
  api.getUsers().then(res => {
    console.log('>>>', res.data);
    users.value = res.data;
  })
})
</script>

<template>
  <h1>{{ message }}</h1>
  <div v-for="user in users" :key="user.id">
    <p>{{ user.login }}</p>
    <img :src="user.avatar_url" :alt="user.login" width="100">
  </div>
</template>

<style scoped></style>
