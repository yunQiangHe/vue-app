import Vue from 'vue'
// import ElementUI from "element-ui"全局引入
// import "element-ui/lib/theme-chalk/index.css" 全局引入
import { Button, Select, Row } from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue.use(ElementUI)全局引入
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)

// 全局自定义方法
Vue.prototype.isMobile = function() {
    let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
    return flag;
}

// 接口暴露在全局
import { server } from './config/api'
Vue.prototype.$server = server;

new Vue({
    router,
    store, //store:store 和 router 一样，将我们创建的 Vuex 实例挂载到这个 vue 实例中
    render: h => h(App)
}).$mount('#app')