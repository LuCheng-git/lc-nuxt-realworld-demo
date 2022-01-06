import axios from 'axios'

// 创建请求对象
export const request = axios.create({
  baseURL: 'https://api.realworld.io'
})

// 通过插件机制获取到上下文对象（query,params,req,res,app,store...）
// 插件导出函数必须作为default 成员
export default ({store}) => {
  // 请求拦截器
  request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    // 如果请求失败（此时请求还没发出去）就会进入这里，很少见，不动它
    return Promise.reject(error);
  });
}


