<template>
    <div class="shop_head">
      <div class="shop_img">
        <img :src="shopInfo.icon">
      </div>
      <div class="shop_text">
        <span class="shop_name">{{shopInfo.name}}</span>
        <span class="intrduction">{{shopInfo.intrduction}}</span>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
      data (){
        return {
          shopId: null,
          shopInfo: {}
        }
      },
      created (){
         this.shopId = this.$route.params.id
      },
      beforeMount (){
        axios.get('/hotShop').then(res => {
          let result = res.data.data.slice(this.shopId - 1, this.shopId)[0]
          this.shopInfo = result
        })
      }
    }
</script>

<style scoped>
  .shop_head{
    width: 100%;
    background: #0077aa;
    padding: 5vw;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
  }
  .shop_img{
    display: inline-block;
    border: 1vw solid #404040;
    background: #ffff;
    width: 30vw;
    height: 30vw;
    padding: 1vw;
  }
  .shop_img>img{
    width: 100%;
    height: 100%;
  }
  .shop_text{
    margin-left: 4vw;
    display: inline-block;
    width: 50vw;
  }
  .shop_name{
    display: block;
    font-size: 20px;
    color: #ffff;
    margin-bottom: 2vw;
  }
  .intrduction{
    display: block;
    font-size: 14px;
    color: #ffff;
  }
</style>
