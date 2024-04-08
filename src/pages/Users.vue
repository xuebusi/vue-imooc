<script setup>
import { ref } from 'vue'

</script>

<template>
  <h1 class="p-2">用户信息</h1>
  <br>
  {{ $store.state.user}}
</template>

<style scoped></style>
