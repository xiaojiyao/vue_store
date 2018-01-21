// 引入vue的第三方包
import Vue from 'vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'

// 引入不属于vue的第三方包
import 'normalize.css'
import axios from 'axios'

// 引入自己写的模块
import router from './router'
import Myfilter from './filter'
import './less/index.less'
import './css/style.css'

// 引入根组件
import App from './App'

// 引入接口配置
import api from './js/api-config'

// 使用vue的第三方包
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(Myfilter)

// 一配置, 以后所有的请求就会自动使用这个域名
axios.defaults.baseURL = 'http://localhost:8899'

// 浏览器有个安全机制, 如果是跨域请求, 浏览器是不会把本地cookie信息携带过去的
axios.defaults.withCredentials = true

// 将axios和配置的api文件添加到Vue原型上，方便使用
Vue.prototype.$http = axios
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
