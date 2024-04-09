<template>
    <el-container>
        <el-header style="padding-left: 0px; padding-right: 0px;">
            <FHeader />
        </el-header>
        <el-container>
            <el-aside width="200px" style="background-color: cadetblue;">
                <FMenu />
            </el-aside>
            <el-main>
                <FTagList />
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';
</script>
<style scoped></style>