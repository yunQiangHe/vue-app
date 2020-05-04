/*
 * @Author: heyunqiang 
 * @Date: 2020-05-04 11:06:27 
 * @Last Modified by: yunqinagHe
 * @Last Modified time: 2020-05-04 12:16:21
 */

import axios from "axios";

axios.defaults.timeout = '5000';
axios.defaults.baseURL = '';

// Add a request interceptor http request 拦截器
axios.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor 响应拦截器即异常处理
axios.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    console.log('错误请求')
                    break;
                case 401:
                    console.log('未授权，请重新登录')
                    break;
                case 403:
                    console.log('拒绝访问')
                    break;
                case 404:
                    console.log('请求错误,未找到该资源')
                    break;
                case 405:
                    console.log('请求方法未允许')
                    break;
                case 408:
                    console.log('请求超时')
                    break;
                case 500:
                    console.log('服务器端出错')
                    break;
                case 501:
                    console.log('网络未实现')
                    break;
                case 502:
                    console.log('网络错误')
                    break;
                case 503:
                    console.log('服务不可用')
                    break;
                case 504:
                    console.log('网络超时')
                    break;
                case 505:
                    console.log('http版本不支持该请求')
                    break;
                default:
                    console.log(`连接错误${error.response.status}`)
            }
        } else {
            console.log('连接到服务器失败')
        }

        return Promise.reject(error);
    }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 官网接口请求封装
 * @param url
 * @param data
 * @returns {Promise}
 */


export const server = {
    getContentMenu: (paramObj) => fetch('/content/menu', paramObj), //内容详情查询
    getContentListPort: (paramObj) => fetch('/content/list/' + paramObj), //入口页面接口
    getContentList: (paramObj) => fetch('/content/list/' + paramObj), //内容详情查询
    getPageviews: (paramObj) => fetch('/webpage/1/view', paramObj) //流量统计接口
}


/*
组件里面使用：
```js
methods: {
    getPageviews() {
    var that = this;
    let params = {
    pageId: that.pageId,
    pageUrl: that.pageUrl,
    };
    that.\$server.getPageviews(params).then(response => {})
    }
}
*/