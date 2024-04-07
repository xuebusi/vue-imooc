<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const toLogin = () => {
  router.push({
    path: '/login'
  })
}

const toRegister = () => {
  router.push({
    path: '/register'
  })
}
</script>

<template>
  <div>
    <!-- <header class="p-3 text-bg-dark mb-5">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 me-3 mb-lg-0 text-white text-decoration-none">
            <h3><span class="bi me-2 text-warning">学不死</span>的程序员</h3>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <router-link to="/" class="nav-link px-2 text-secondary">首页</router-link>
            </li>
            <li>
              <router-link to="/news" class="nav-link px-2 text-secondary">新闻</router-link>
            </li>

            <li>
              <router-link to="/users" class="nav-link px-2 text-secondary">用户</router-link>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
              aria-label="Search">
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2" @click="toLogin">登录</button>
            <button type="button" class="btn btn-warning" @click="toRegister">注册</button>
          </div>
        </div>
      </div>
    </header> -->

    <router-view />
  </div>

  <!-- <UserList /> -->
</template>

<style scoped></style>
