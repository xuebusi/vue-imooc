<template>
    <el-containver>
        <el-header>
            <FHeader />
        </el-header>
        <el-container>
            <el-aside>
                <FMenu />
            </el-aside>
            <el-main>
                <FTagList />
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-containver>
</template>
<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';
</script>
<style scoped></style>