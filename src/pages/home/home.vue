<template>
    <div class="home">
      <head-bar></head-bar>
      <nav-bar></nav-bar>
      <slide></slide>
      <hot-goods></hot-goods>
      <hot-shop></hot-shop>
    </div>
</template>

<script>
  import HeadBar from '../../components/head'
  import NavBar from '../../components/nav'
  import Slide from '../../components/slide'
  import HotGoods from './hotGoods'
  import HotShop from './hot_shop'
  export default {
    components:{
      HeadBar,
      NavBar,
      Slide,
      HotGoods,
      HotShop
    }
  }
</script>

<style scoped>

</style>
