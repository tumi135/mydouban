<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
      return{

      }
  }
}
</script>

<style lang="scss" scoped>
.nav{
  display:flex;;
  height: 45px;
  line-height: 45px;
  border-bottom: 3px solid #68cb78;
}
  .nav-item{
    flex:1;
    text-align:center;
    font-size:28px;
  }
  .actives{
    color: #68cb78;
  }
  a{
    text-decoration:none;
    width: 100%;
    height: 100%;
    display: block;
    color: rgb(77,85,93);
  }
  .router-link-active{
    color: green;
  }


/*a.active*/
/*color rgb(240,20,20) !important*/
</style>
