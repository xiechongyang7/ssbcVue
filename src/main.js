// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//头
import ssHead from './components/ssHead'
//底
import ssFooter from './components/ssFooter'
//主体
import ssContent from './components/ssContent'
//常量
import constant from'./components/constant/constant'

Vue.config.productionTip = false

//头
Vue.component(
  'ssHead',ssHead
)
//脚
Vue.component(
  'ssFooter',ssFooter,
)
//主要内容
Vue.component(
  'ssContent',ssContent,

)
//全局发送方法
Vue.prototype.sendToGateway = function (data) {
  console.log(data);
  // return 'http://csdn.net';
}

//常量文件
Vue.prototype.constant = constant

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App ,

  },
  template: '<App/>'
})
