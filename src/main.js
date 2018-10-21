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

Vue.config.productionTip = false

Vue.component(
  'ssHead',ssHead
)
Vue.component(
  'ssFooter',ssFooter,
)
Vue.component(
  'ssContent',ssContent,

)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App ,

  },
  template: '<App/>'
})
