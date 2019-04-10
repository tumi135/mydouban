<template>
    <div class="shop">
      <div class="back">
        <i class="iconfont icon-left-circle" v-on:click="goBack"></i>
      </div>
      <shop-head></shop-head>
      <shop-goods v-show="choseId == 0" :myId="0" :myChoseId="choseId"></shop-goods>
      <shop-goods v-if="hot" v-show="choseId == 1" :myId="1" :myChoseId="choseId"></shop-goods>
      <shop-goods v-if="sale" v-show="choseId == 2" :myId="2" :myChoseId="choseId"></shop-goods>
      <div class="chose_box">
        <button class="all" @click="changeChose(0)" :class="{active: choseId == 0}">全部</button>
        <button class="hot" @click="changeChose(1)" :class="{active: choseId == 1}">热销</button>
        <button class="sale" @click="changeChose(2)" :class="{active: choseId == 2}">打折</button>
      </div>
    </div>
</template>

<script>
  import shopHead from './shop_head'
  import shopGoods from './shop_goods'
    export default {
      data (){
        return {
          choseId: 0,
          hot: false,
          sale: false
        }
      },
      components: {
        shopHead,
        shopGoods
      },
      methods: {
        goBack (){
          if(window.history.length <= 1){
            this.$router.push({name: 'home'})
          }else {
            this.$router.back()
          }
        },
        changeChose (i){
          this.choseId = i
          if(i === 1){
            this.hot = true
          }else if(i === 2){
            this.sale = true
          }
        }
      }
    }
</script>

<style scoped>
  .back{
    position: fixed;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    z-index: 99;
  }
  .icon-left-circle{
    font-size: 26px;
    vertical-align: sub;
    color: #a5a5a5;
  }
  .chose_box{
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 99;
    width: 100%;
    height: 30px;
    /*padding: 5px;*/
    background: #ebebeb;
    font-size: 0px;
  }
  .chose_box>button{
    width: 33%;
    height: 100%;
    border: 0px;
    outline: 0px;
    font-size: 14px;
    background: #ebebeb;
    box-sizing: border-box;
    color: #999999;
  }
  .chose_box>.all,.chose_box>.hot{
    border-right: 1px solid #999999;
  }
  .chose_box>.active{
    box-shadow: 1px 2px 4px rgba(0,0,0,.6) inset;
  }
</style>
