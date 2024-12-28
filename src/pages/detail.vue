<script setup>
// import { useRoute } from 'vue-router'
// const route = useRoute()
// console.log(route);

defineProps(['title', 'content'])

</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ content }}</p>
</template>

<style scoped></style>
