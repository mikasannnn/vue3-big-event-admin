import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例
// 配置 history 模式
// 1. history模式：createWebHistory      地址栏不加#
// 2. hash模式：   createWebHashHistory  地址栏加#

// vite 中的环境变量 import.meta.env.BASE_URL 就是 vite.config.js 中的 base配置项 bash: '/',

// vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
// https://vitejs.dev/guide/build.html#public-base-path

// 如果将来你部署的域名路径是：http://xxx/my-path/user
// vite.config.ts  添加配置  base: my-path，路由这就会加上 my-path 前缀了

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/loginPage.vue') },//登录页
    { path: '/', component: () => import('@/views/layout/layoutContainer.vue'),
      redirect: '/article/manage', // 重定向到文章管理
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue'),
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue'),
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue'),
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue'),
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/userPassword.vue'),
        }
      ]
    }
  ],
})

export default router
