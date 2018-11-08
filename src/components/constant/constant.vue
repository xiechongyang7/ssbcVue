<template>

</template>

<script>
  const serverSrc = 'www.baidu.com';
  const token = '12345678';
  const hasEnter = false;
  const userSite = "中国钓鱼岛";

  // const getwayUrl = ;
  export default {
    name: "constant",
    loginServiceId: "1100001",
    registerServiceId: "1100002",
    SendCodeServiceId: "1200001",
    userSite,//用户地址
    token:'',//用户token身份
    serverSrc,//服务器地址
    hasEnter,//用户登录状态
    methods :{
      setToken:function (token) {
        this.token = token;
      }
    }
  }


</script>

<style scoped>

</style>
