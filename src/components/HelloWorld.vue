<template>
  <!--<div class="hello">-->
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://vuejs.org"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Core Docs-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://forum.vuejs.org"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Forum-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://chat.vuejs.org"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Community Chat-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://twitter.com/vuejs"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Twitter-->
        <!--</a>-->
      <!--</li>-->
      <!--<br>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://vuejs-templates.github.io/webpack/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Docs for This Template-->
        <!--</a>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://router.vuejs.org/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--vue-router-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://vuex.vuejs.org/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--vuex-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://vue-loader.vuejs.org/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--vue-loader-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://github.com/vuejs/awesome-vue"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--awesome-vue-->
        <!--</a>-->
        <!--<div class="container">-->
          <!--<div class="row">-->
            <!--<div class="col-md-6">-->
              <!--<button class="btn btn-primary">测试按钮</button>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">-->
      <!--<ul class="nav navbar-nav">-->
        <!--<li class="active"><a href="#">Link</a></li>-->
        <!--<li><a href="#">Link</a></li>-->
        <!--<li class="dropdown">-->
          <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>-->
          <!--<ul class="dropdown-menu" role="menu">-->
            <!--<li><a href="#">Action</a></li>-->
            <!--<li><a href="#">Another action</a></li>-->
            <!--<li><a href="#">Something else here</a></li>-->
            <!--<li class="divider"></li>-->
            <!--<li><a href="#">Separated link</a></li>-->
            <!--<li class="divider"></li>-->
            <!--<li><a href="#">One more separated link</a></li>-->
          <!--</ul>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<form class="navbar-form navbar-left" role="search">-->
        <!--<div class="form-group">-->
          <!--<input type="text" class="form-control" placeholder="Search">-->
        <!--</div>-->
        <!--<button type="submit" class="btn btn-default">Submit</button>-->
      <!--</form>-->
      <!--<ul class="nav navbar-nav navbar-right">-->
        <!--<li><a href="#">Link</a></li>-->
        <!--<li class="dropdown">-->
          <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>-->
          <!--<ul class="dropdown-menu" role="menu">-->
            <!--<li><a href="#">Action</a></li>-->
            <!--<li><a href="#">Another action</a></li>-->
            <!--<li><a href="#">Something else here</a></li>-->
            <!--<li class="divider"></li>-->
            <!--<li><a href="#">Separated link</a></li>-->
          <!--</ul>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>&lt;!&ndash; /.navbar-collapse &ndash;&gt;-->
    <!--<ul class="nav nav-pills" role="tablist">-->
      <!--<li role="presentation" class="active"><a href="#">Home <span class="badge">42</span></a></li>-->
      <!--<li role="presentation"><a href="#">Profile</a></li>-->
      <!--<li role="presentation"><a href="#">Messages <span class="badge">3</span></a></li>-->
    <!--</ul>-->
  <!--</div>-->
 <!--<div>-->
   <!--<span class="label label-default">Default</span>-->
   <!--<span class="label label-primary">Primary</span>-->
   <!--<span class="label label-success">Success</span>-->
   <!--<span class="label label-info">Info</span>-->
   <!--<span class="label label-warning">Warning</span>-->
   <!--<span class="label label-danger">Danger</span>-->
 <!--</div>-->
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
