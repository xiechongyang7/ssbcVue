<template>
  <!--<div id="app">-->
    <!--<router-view/>-->
  <!--</div>-->
  <div id="app">

    <ss-head></ss-head>
    <ss-content></ss-content>
    <ss-footer></ss-footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    // components: {
    //   'ssHead':ssHead,
    //   'ssFooter':ssFooter,
    //   'ssContent':ssContent
    // },
  }
</script>

<style>
#app {
  margin:0 auto;
  width: 80%;
  background: aliceblue;
  /*border: none;*/
  box-sizing: border-box;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
