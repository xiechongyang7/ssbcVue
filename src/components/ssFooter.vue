<template>
  <nav class="navbar navbar-default navbar-fixed-bottom  col-xs-12 col-md-12">
    <!--右边 navbar-brand -->
    <span class="navbar-brand col-xs-12 col-md-6">
      <!--logo-->
      <h5 style="font-size: 1.2em" class="nav navbar-nav">
        <img src="../assets/img/海.svg"/>&nbsp;&nbsp;见海书屋
      </h5>
    </span>


    <!--左边  nav navbar-nav -->
    <span class="col-xs-12 col-md-6" style="font-size: 1em">
      <a href="https://github.com/xiechongyang7">
        <img class="navbar-brand navbar-right col-xs-2 col-md-1" src="../assets/img/github.svg" title="哈哈"/>
      </a>
      <img class="navbar-brand navbar-right col-xs-2 col-md-1" src="../assets/img/邮箱.svg" data-content="xiechongyang7@163.com" data-container="body" data-toggle="popover" data-placement="top"/>
      <img data-target=".QQ" data-toggle="modal" class="navbar-brand navbar-right col-xs-2 col-md-1" src="../assets/img/QQ.svg" title="791465939"/>
      <img data-target=".weixin" data-toggle="modal" class="navbar-brand navbar-right col-xs-2 col-md-1" src="../assets/img/微信.svg" title="17721492172"/>
      <input class="navbar-brand navbar-right col-xs-4 col-md-2" style="border: none;font-size: 0.8em"
             value="如果侵权联系我们：" readonly/>
    </span>

    <!--微信二维码-->
    <div class="modal fade weixin" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <img src="../assets/img/微信二维码.png"/>
        </div>
      </div>
    </div>
    <!--QQ二维码-->
    <div class="modal fade QQ" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <img src="../assets/img/QQ二维码.png"/>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
  // <!--初始化弹出框-->
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  export default {
    name: "ss-footer"
  }
</script>

<style scoped>

</style>
