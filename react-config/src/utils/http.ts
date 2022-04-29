import { message } from 'antd';

import axios from 'axios';

const http = createAxiosInstance();
export default http;
function createAxiosInstance() {
  const instance = axios.create({
    baseURL: BASE_API,
    timeout: 5000,
    headers: {
      // 可定义统一的请求头部
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  });
  // 添加请求拦截器(在发送请求之前做些什么)
  instance.interceptors.request.use(config => {
    //   //可添加开启loading效果的函数
    //   loading.open()
    //   //token 存在就添加到请求头里
    //   token && (config.headers.Authorization = token)
    // 过滤请求参数中的 null undefined ''的函数
    //   cleanObject()
    return config;
  });
  // 添加响应拦截器(对响应数据做点什么)
  instance.interceptors.response.use(
    response => {
      //可添加关闭loading效果的函数
      //   loading.close()
      //解构出返回结果的数据
      const { data, status } = response;
      //对自定义code码进行判断,将成功的数据返回出去
      const validateStatus = /^(2|3)\d{2}$/; //code为2或3开头的视作请求成功
      if (validateStatus.test(status.toString())) {
        return data;
      }
      //判断失败的code码并作出提示等操作
      if (status === 401) {
        message.error(data.msg);
      } else {
        message.warning(data.msg);
      }
      return Promise.reject(data);
    },
    error => {
      console.log('-http: error-', error);
      //   loading.close()  //可添加关闭loading效果的函数
      if (error.response && error.response.status === 401) {
        // message.error('token失效，请重新登录！')
        // removeStorageToken()
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        if (!window.navigator.onLine) {
          message.warning('网络异常，请检查网络是否正常连接');
        } else if (error.code === 'ECONNABORTED') {
          message.warning('请求超时');
        } else {
          message.warning('服务器异常，请联系管理员');
        }
      }
      return Promise.reject(error); // 将错误继续返回给到具体页面
    }
  );

  return instance;
}
