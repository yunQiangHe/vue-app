import Vue from 'vue'
// import ElementUI from "element-ui"全局引入
// import "element-ui/lib/theme-chalk/index.css" 全局引入
import { Button, Select } from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue.use(ElementUI)全局引入
Vue.use(Button)
Vue.use(Select)


new Vue({
    router,
    store, //store:store 和 router 一样，将我们创建的 Vuex 实例挂载到这个 vue 实例中
    render: h => h(App)
}).$mount('#app')