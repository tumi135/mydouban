<template>
    <div class="home">
      <head-bar></head-bar>
      <nav-bar></nav-bar>
      <slide></slide>
      <hot-goods></hot-goods>
    </div>
</template>

<script>
  import HeadBar from '../../components/head'
  import NavBar from '../../components/nav'
  import Slide from '../../components/slide'
  import HotGoods from './hotGoods'
  export default {
    components:{
      HeadBar,
      NavBar,
      Slide,
      HotGoods
    }
  }
</script>

<style scoped>

</style>
