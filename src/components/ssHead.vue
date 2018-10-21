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

    <!--<button type="button" class="btn btn-primary" >Open modal for @mdo</button>-->
    <!--<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>-->
    <!--<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>-->
    <!--<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>-->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--标题-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="exampleModalLabel">登录注册</h4>
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
              <!--<form  class="">-->
                <!--<div class="form-group">-->
                  <!--<label class="sr-only" for="exampleInputEmail3">Email address</label>-->
                  <!--<input  type="text" class="form-control" id="exampleInputEmail3" placeholder="Email">-->
                <!--</div>-->
                <!--<div class="form-group">-->
                  <!--<label class="sr-only" for="exampleInputPassword3">Password</label>-->
                  <!--<input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password">-->
                <!--</div>-->
                <!--<div class="checkbox">-->
                  <!--<label>-->
                    <!--<input type="checkbox"> Remember me-->
                  <!--</label>-->
                <!--</div>-->
                <!--<button type="submit" class="btn btn-default">Sign in</button>-->
              <!--</form>-->
              <form class="form-horizontal">
                <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">账号</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="邮箱/手机号/用户名">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="密码">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox"> 记住我
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">登录</button>
                  </div>
                </div>
              </form>
            </div>
            <div id="register" v-show="!loginAndregister">
              注册
            </div>
            <!--<form>-->
            <!--<div class="form-group">-->
            <!--<label for="recipient-name" class="control-label">Recipient:</label>-->
            <!--<input type="text" class="form-control" id="recipient-name">-->
            <!--</div>-->
            <!--<div class="form-group">-->
            <!--<label for="message-text" class="control-label">Message:</label>-->
            <!--<textarea class="form-control" id="message-text"></textarea>-->
            <!--</div>-->
            <!--</form>-->
          </div>


          <!--<div class="modal-footer">-->
            <!--&lt;!&ndash;<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>&ndash;&gt;-->
            <!--&lt;!&ndash;<button type="button" class="btn btn-primary">Save changes</button>&ndash;&gt;-->
            <!--&lt;!&ndash;关闭按钮&ndash;&gt;-->
            <!--&lt;!&ndash; data-dismiss="modal"&ndash;&gt;-->
            <!--<button type="button" class="btn btn-default">登录</button>-->
            <!--&lt;!&ndash;发送按钮&ndash;&gt;-->
            <!--<button type="button" class="btn btn-primary">发送</button>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  // <!--模态框-->
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

  export default {
    name: "ss-head",
    data() {
      return {
        isLogin: false,
        loginAndregister: true

      }
    },
    methods: {
      loginClass: function (value) {
        if (value === 'login') {
          this.loginAndregister = true
        } else {
          this.loginAndregister = false
        }
      }
    },
    // computed() {
    //   return {
    //     // copyright(){
    //     //   return 'Copyright &copy;'+this.year+' '+this.site  //not OK
    //     // }
    //   }
    // }
    // computed() {
    //   return {
    //     loginClass() {
    //       // if(){
    //       //   return active
    //       // }else {
    //       //   return null
    //       // }
    //       !this.loginAndregister
    //     }
    //   }
    // }
  }
</script>

<style scoped>

</style>
