import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'

// 用户模块
export const useUserStore = defineStore('big-user', () => {
  const token = ref('')

  const setToken = (newToken) => {
    token.value = newToken
  }
  const removeToken = () => {
    token.value = ''
  }

  const user = ref({})
  const getUser = async () => {
    const res = await userGetInfoService() //请求获取数据
    user.value = res.data.data //将数据存储到user中
  }
  const setuser = (obj) => {
    user.value = obj
  }
  return{
    token,
    user,
    setToken,
    removeToken,
    getUser,
    setuser
  }
},
{persist: true}
)
