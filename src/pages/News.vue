<script setup>
import { useRouter } from 'vue-router';
import { useNewsStore } from '../store/news.js';
import { storeToRefs } from 'pinia';

const newsStore = useNewsStore()
const { newsList } = storeToRefs(newsStore)
console.log('newList:', newsList.value);

const router = useRouter()

const showDetail = (news) => {
  router.push({
    name: 'detail',
    params: {
      title: news.title,
      content: news.content
    }
  })
}
</script>

<template>
  <ul style="background-color: pink;">
    <li v-for="news in newsList" :key="news.id" style="margin: 10px 0px;">
      <button type="button" @click="showDetail(news)">{{ news.title }}</button>
    </li>
  </ul>

  <div style="background-color: orange; padding: 15px;">
    <router-view />
  </div>
</template>

<style scoped>
a {
  margin: 10px;
}
</style>
