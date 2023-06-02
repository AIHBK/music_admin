import axios from 'axios'
import serverConfig from '../config/index'
import qs from 'qs'
const serviceAxios = axios.create({
  baseURL: serverConfig.baseURL,
  timeout: '6000'
})
// 请求拦截
serviceAxios.interceptors.request.use((config) => {
  // 设置请求头
  if (!config.headers['content-type']) {
    // 没用请求头的时候
    if (config.method === 'post') {
      config.headers['content-type'] = 'application/x-www-form-urlencoded'
      config.data = qs.stringify(config.data)
    } else {
      config.headers['content-type'] = 'application/'
    }
  }
  return config
}, (err) => {
  Promise.reject(err)
  console.log('1', err)
})
// 请求响应
serviceAxios.interceptors.response.use((config) => {
  return config
}, (err) => {
  Promise.reject(err)
  console.log('2', err)
})
export default serviceAxios
