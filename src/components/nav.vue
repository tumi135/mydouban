<template>
    <div class="nav">
      <ul>
        <li v-for="(item, index) in navItem" :key="index" >
          <router-link :to="item.url" active-class="actives" >{{item.text}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      data (){
        return {
          navItem : [
            {text: '首页', url: '/home'},
            {text: '分类', url: '/category'},
            {text: '购物车', url: '/car'},
            {text: '我的', url: '/me'}
          ]
        }
      },
      computed: {
        // nowRouter (){
        // }
      },
      watch: {
        $route (to, from) {
          console.log(this.$route.path)
        }
      }
    }
</script>

<style scoped>
  .nav{
    width: 100%;
    height: 45px;
    border-bottom: 3px solid #68cb78;
  }
  .nav>ul{
    display: flex;
    width: 100%;
    height: 45px;
    justify-content: space-around;
    align-items: center;
  }
  .nav>ul>li{
    display: inline-block;
    list-style: none;
  }
  .nav>ul>li>a{
    color: #4a4a4a;
    font-size: 15px;
  }
  .nav>ul>li>.actives{
    color: #68cb78;
    font-size: 15px;
  }
  .active{
    color: #68cb78;
  }

</style>
