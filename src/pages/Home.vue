<script setup>
import { ref } from 'vue';
import api from '../api'

import { toast } from '@/util/common'
import { useRouter } from 'vue-router'
import { removeToken } from '../util/auth'

const router = useRouter()

function logout() {
  api.logout()

  removeToken()

  router.push('/login')
  toast('退出登录成功')
}

const carouselList = ref([{
  id: 1,
  img: 'https://img1.sycdn.imooc.com/66038d1f000109a516000682.jpg',
}, {
  id: 2,
  img: 'https://img1.sycdn.imooc.com/660390700001db3816000682.jpg',
}, {
  id: 3,
  img: 'https://img1.sycdn.imooc.com/66027b230001dadd16000682.jpg',
}, {
  id: 4,
  img: 'https://img1.sycdn.imooc.com/66026ce500014b9e16000682.jpg',
}, {
  id: 5,
  img: 'https://img1.sycdn.imooc.com/660272d200010ce216000682.jpg',
}, {
  id: 6,
  img: 'https://img1.sycdn.imooc.com/6602705e000181ab17920764.jpg',
},])
</script>

<template>
  <div>
    <el-button type="danger" plain @click="logout">退出登录</el-button>
    <section>
      <div class="containber">
        <div id="carouselExampleInterval" class="container d-flex carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner rounded shadow">
            <div v-for="item in carouselList" :key="item.id" class="carousel-item active" data-bs-interval="3000">
              <img :src="item.img" class="d-block w-100" alt="">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">上一个</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">下一个</span>
          </button>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="d-flex my-5">
          <img src="../assets/img/index/title-bg3.png" alt="新上好课" style="width: 180px;" class="me-3 d-none d-sm-block">
          <input type="button" class="btn btn-default active" value="推荐" />
          <input type="button" class="btn btn-default" value="前端开发" />
          <input type="button" class="btn btn-default" value="后端开发" />
          <input type="button" class="btn btn-default" value="精品免费" />
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          <div class="col">
            <div class="card">
              <img src="../assets/img/new-course/01.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">前端跳槽突围课，React18底层源码深入剖析</p>
                <p class="text-secondary" style="font-size: 14px;">高级 · 19人报名 </p>
                <p class="text-secondary" style="font-size: 14px;">免费</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/new-course/02.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">音视频高手突围课--WebRTC企业级高性能后台服务实战</p>
                <p class="text-secondary" style="font-size: 14px;">中级 · 8人报名 </p>
                <p class="text-secondary" style="font-size: 14px;">免费</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/new-course/03.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">AI Agent智能应用从0到1定制开发 全流程解决方案实战</p>
                <p class="text-secondary" style="font-size: 14px;">中级 · 192人报名 </p>
                <p class="text-secondary" style="font-size: 14px;">免费</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/new-course/04.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">小白算法集训营-大幅提升刷题量，快速逃离新手区</p>
                <p class="text-secondary" style="font-size: 14px;">中级 · 44人报名 </p>
                <p class="text-secondary" style="font-size: 14px;">免费</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/new-course/05.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">Go从入门到进阶，大厂案例全流程实践</p>
                <p class="text-secondary" style="font-size: 14px;">中级 · 42人报名 </p>
                <p class="text-secondary" style="font-size: 14px;">免费</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/new-course/06.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">Stable Diffusion 商业变现与绘画大模型多场景实战</p>
                <p class="text-secondary" style="font-size: 14px;">中级 · 116人报名 </p>
                <p class="text-secondary" style="font-size: 14px;">免费</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/new-course/07.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">低代码全栈项目实战 商业级海报编辑器全流程落地</p>
                <p class="text-secondary" style="font-size: 14px;">中级 · 23人报名 </p>
                <p class="text-secondary" style="font-size: 14px;">免费</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/new-course/08.png" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">5月开考，火热报名中，系统架构设计师（软考高级）</p>
                <p class="text-secondary" style="font-size: 14px;">高级 · 99人报名 </p>
                <p class="text-secondary" style="font-size: 14px;">免费</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
