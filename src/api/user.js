import request from '@/utils/request'

//注册接口
//传过来的参数 进行结构
export const userRegisterService = ( {username,password,repassword}) =>
  request.post('/api/reg', { username, password, repassword })

