<script setup>


// 在 Vue3 CompositiAPI 中
// 1. 获取路由对象 router userouter
//    const router = useRouter()
// 2. 获取路由参数 router userouter
//    const route = useRoute()
import { useRoute,useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const goList = () => {
  router.push('/list')
  console.log(router,route)
}

</script>

<template>
  <div>
    我是App.vues
    <button @click="$router.push('/home')">跳转首页</button>
    <button @click="goList">跳转列表页</button>
  </div>

</template>

<style scoped>
</style>
