<script setup>


// 在 Vue3 CompositiAPI 中
// 1. 获取路由对象 router userouter
//    const router = useRouter()
// 2. 获取路由参数 router userouter
//    const route = useRoute()
import { useRoute,useRouter } from 'vue-router';
import { useUserStore, useCountStore } from '@/stores';
import {  } from './stores/modules/counter.js';

const countStore = useCountStore()
const router = useRouter()
const route = useRoute()
const goList = () => {
  router.push('/list')
  console.log(router,route)
}

const userStore = useUserStore()
</script>

<template>
  <div>
    我是App.vue
    <TestDemo></TestDemo>
    <el-button @click="$router.push('/home')">跳转首页</el-button>
    <el-button @click="goList">跳转列表页</el-button>

    <el-button type="primary">Primary Button</el-button>
    <el-button type="success">Success Button</el-button>

    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('Bear sadoijaijo')">登录</el-button>
    <el-button @click="userStore.removeToken()">退出</el-button>

    <hr/>
    {{ countStore.count }}
    <el-button @click="countStore.add(2)">加法</el-button>
  </div>
</template>

<style scoped>
</style>
