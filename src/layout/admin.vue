<template>
    <div class="common-layout">
        <el-container>
            <el-header style="background-color:brown;">
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
    </div>
</template>
<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';
</script>
<style scoped></style>