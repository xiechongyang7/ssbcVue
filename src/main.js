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
import constant from './components/constant/constant'
import axios from 'axios'

Vue.config.productionTip = false

//***********************************************全局组件***********************************************
//头
Vue.component(
  'ssHead', ssHead
)
//脚
Vue.component(
  'ssFooter', ssFooter,
)
//主要内容
Vue.component(
  'ssContent', ssContent,
)
//***********************************************全局组件***********************************************

//***********************************************全局方法***********************************************
//发送方法
Vue.prototype.sendToGateway =  function (data) {
  console.log("请求参数:");
  console.log(data);
  let getwayUrl = 'http://127.0.0.1:8001/gateway';
  let token = this.constant.token;
  let headers  =  {
    'Content-Type': 'application/json',
      'token':token,
  };
  return new Promise(function (resolve) {
    axios.post(getwayUrl,data,{
      headers:headers
    }).then(function (res) {
      console.log("返回参数:")
      console.log(res.data)
      if(res.data.code !=='200'){
        alert(res.data.msg);
      }
      resolve(res.data.data);
    }).catch(function(err) {
      if (err.response) {
        console.log(err.response)
        //控制台打印错误返回的内容
        alert(err.response)
      }
    })
  })
}
//请求id方法
Vue.prototype.getReqId = function (value) {
  let timestamp = (new Date()).getTime();
  let num = '';
  for(let i=0;i<5;i++){
    num+=Math.floor(Math.random()*10)
  }
  console.log(num)

  return value + timestamp + "" +num;
}
//获取当前时间
Vue.prototype.getData = function () {
  let date = new Date();
  let separator = "-";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return year + separator + month + separator + strDate;
}
//请求参数组装
Vue.prototype.getResult = async function (value, serviceId, isSign, isEncrypt, userId, data) {
  let reqId = this.getReqId(value);
  let date = this.getData();
  let params = {
    reqId: reqId,
    serviceId: serviceId,
    reqTime: date,
    sign: false,
    isSign: isSign,
    isEncrypt: isEncrypt,
    userId: userId,
    data: data
  }

  let json = JSON.stringify(params)
  return await this.sendToGateway(json)
}
Vue.prototype.getResultNoSignNoEncrypt = async function (value, serviceId, userId, data) {
   let a =  await this.getResult(value, serviceId, false,false, userId,JSON.stringify(data))
  return a;
}

Vue.prototype.getResultNoSignIsEncrypt = async function (value, serviceId, userId, data) {
  let a =  await this.getResult(value, serviceId, false,true, userId,JSON.stringify(data))
  return a;
}

//***********************************************全局方法***********************************************


//***********************************************常量文件***********************************************
Vue.prototype.constant = constant
//***********************************************常量文件***********************************************

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,

  },
  template: '<App/>'
})
