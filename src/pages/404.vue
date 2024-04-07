<script setup>

</script>

<template>
    <el-result icon="warning" title="404页面" sub-title="您要找的页面丢了～">
        <template #extra>
            <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </template>
    </el-result>
</template>

<style scoped></style>