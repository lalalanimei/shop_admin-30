import Vue from 'vue'
import App from './App'
import router from './router'
// 导入element-ui
import ElementUi from 'element-ui'
// 导入element-ui 的样式文件
import 'element-ui/lib/theme-chalk/index.css'
// 导入通用样式
import '@/assets/base.css'
// 使用element-ui插件
Vue.use(ElementUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
