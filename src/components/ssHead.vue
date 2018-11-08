<template>
  <nav class="navbar navbar-default col-xs-12 col-md-12">
    <div class="container-fluid">
      <div class="navbar-header ">
        <a class="navbar-brand" href="#">
          <!--logo-->
          <h5 style="font-size: 1.2em" class="nav navbar-nav">
            <img src="../assets/img/海.svg"/>&nbsp;&nbsp;见海书屋
          </h5>
        </a>
      </div>
      <!--id="bs-example-navbar-collapse-1"  class="collapse navbar-collapse"-->
      <div>
        <form class="navbar-form navbar-right">
          <div class="form-group col-xs-6">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default col-xs-3">搜索</button>
          <button type="button" class="btn btn-default col-xs-3" data-toggle="modal" data-target="#exampleModal"
                  data-whatever="@mdo" v-show="!isLogin">登录/注册
          </button>
          <!--<button type="submit" class="btn btn-default col-xs-3" v-show="!isLogin">登录/注册</button>-->
          <button type="submit" class="btn btn-default col-xs-3" v-show="isLogin">个人中心</button>
        </form>

      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--标题-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="exampleModalLabel">登录/注册</h4>
          </div>

          <!--内容-->
          <div class="modal-body">
            <ul class="nav nav-tabs">
              <!--<li role="presentation" v-bind:class="{active: loginAndregister}" v-bind:class="{active: loginAndregister}"class="active:loginAndregister" v-on:click="!loginAndregister"><a href="#">Home</a></li>-->
              <li role="presentation" v-on:click="loginClass('login')"><a>登录</a></li>
              <!--<li role="presentation" class="active:loginAndregister" v-on:click="!loginAndregister"><a href="#">Profile</a></li>-->
              <li role="presentation" v-on:click="loginClass('registers')"><a>注册</a></li>
            </ul>
            <div id="login" v-show="loginAndregister">
              <form class="form-horizontal">
                <div class="form-group">
                  <label for="inputEmail3"  class="col-sm-2 control-label">账号</label>
                  <div class="col-sm-10">
                    <input type="text" v-model="acctNo" class="form-control" id="inputEmail3" placeholder="邮箱/手机号/用户名">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                  <div class="col-sm-10">
                    <input type="password" v-model='pwd' class="form-control" id="inputPassword3" placeholder="密码">
                  </div>
                </div>
                <!--<div class="form-group">-->
                  <!--<div class="col-sm-offset-2 col-sm-10">-->
                    <!--<div class="checkbox">-->
                      <!--<label>-->
                        <!--<input type="checkbox"> 记住我-->
                      <!--</label>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->

                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary" v-on:click="loginFunction">登录</button>
                  </div>
                </div>
                <div class="form-group">
                  <label for="img" class="col-sm-2 control-label">社交号登录:</label>
                  <div class="col-sm-10">
                    <img id = "img" src="../assets/img/github.svg" v-on:click="gitHubLogin"/>
                  </div>
                </div>
              </form>
            </div>
            <div id="register" v-show="!loginAndregister">
              <form class="form-horizontal">
                <div class="form-group">
                  <label for="inputEmail3"  class="col-sm-2 control-label">账号</label>
                  <div class="col-sm-10">
                    <input type="text" v-model='acctNo' class="form-control" id="inputEmail4" placeholder="邮箱/手机号">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3"  class="col-sm-2 control-label">密码</label>
                  <div class="col-sm-10">
                    <input type="password" v-model='pwd' v-on:click="showCode" class="form-control" id="inputPassword4" placeholder="密码">
                  </div>
                </div>
                <div class="form-group" v-show='this.isVCode'>
                  <label for="inputPassword3" class="col-sm-2 control-label">验证码</label>
                  <div class="col-sm-10 form-inline">
                    <input type="text" v-model='vCode' class="form-control" placeholder="验证码">
                    <button class="btn btn-primary" v-on:click="sendfCode">发送验证码</button>
                  </div>
                </div>
                <div class="form-group" v-show='this.isEmail'>
                  <label for="inputPassword3" class="col-sm-2 control-label"></label>
                  <div class="col-sm-10 form-inline">
                    <input type="text" class="form-control"  value="稍后请到邮箱查收验证信息" readonly>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary" v-on:click="registerFunction">注册</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  // <!--模态框-->
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

  export default {
    name: "ss-head",
    data() {
      return {
        isLogin: false,
        loginAndregister: true,
        isVCode:false,
        isEmail:false,
        acctNo:'',
        pwd:'',
        vCode: ''
      }
    },
    mounted:function () {
        this.githubgo();
    },
    methods: {
      loginClass: function (value) {
        if (value === 'login') {
          this.loginAndregister = true
        } else {
          this.loginAndregister = false
        }
      },
      showCode: function () {
        // 邮箱
        let regEmail=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        //手机号
        let regPhone=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(this.acctNo === ''){
          alert("请输入注册账号")
        }else if(regPhone.test(this.acctNo)){
          this.isVCode = true
          this.isEmail = false
        }else if(regEmail.test(this.acctNo)){
          this.isEmail = true
          this.isVCode = false
        }else {
          alert("请输入正确的注册账号")
        }
      },

      /**
       * 登录
       */
      loginFunction: function () {
        let data = {
          logName:this.acctNo,
          pwd:this.pwd,
        }
        let result = this.getResultNoSignNoEncrypt('11',this.constant.loginServiceId,'333',data).then(console.log("111111111"))
        console.log(result);
        // this.constant.setToken(result.token);
        // document.cookie = "token="+result.token;
        // console.log(this.constant.token+"=========="+this.cookie);
      },
      /**
       * 注册
       */
      registerFunction: function () {
        console.log(this.acctNo+":::::"+this.vCode+"::::"+this.pwd)
        let data = {
          registerName:this.acctNo,
          pwd:this.pwd,
          registerType:'phone',
          vcode:this.vCode.toString(),
          Ip:'11111'
        }
        this.getResultNoSignNoEncrypt('14',this.constant.registerServiceId,'333',data)
      },
      /**
       * 发送验证码
       */
      sendfCode: async function () {
        let data = {
          phone:this.acctNo,
          workType:1
        }
        let result = this.getResultNoSignNoEncrypt('12',this.constant.SendCodeServiceId,'333',data);
        console.log("result   "+result);
      },
      /**
       * 三方登录 GitHub
       */
      gitHubLogin: function () {
        window.location.href='https://github.com/login/oauth/authorize?client_id=8f693d407f5552b939fa';
      },
      /**
       * 检测是否是githu登录
       */
      githubgo: function () {
        console.log(location.search)
        let code = location.search.split('=')[1];
        if (code!==''&&code!==null){
          console.log(code)

        }else {
          return
        }
      }
    },

  }
</script>

<style scoped>

</style>
