import request from '@/utils/request'

//注册接口
//传过来的参数 进行结构
export const userRegisterService = ( {username,password,repassword}) =>
  request.post('/api/reg', { username, password, repassword })

//登录接口
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })

//获取用户基本信息
export const userGetInfoService = () => request.get('/my/userinfo')
