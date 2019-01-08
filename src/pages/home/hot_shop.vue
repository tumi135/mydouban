<template>
    <div class="hot-shop" v-infinite-scroll="getHotShops" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
      <div class="db_shop_item" v-for="shop in hotShopList" :key="shop.id">

      </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
      data (){
        return {
          hotShopList: [],
          busy: false,
          shopNum: 5
        }
      },
      methods : {
        getHotShops (){
          this.busy = true
          axios.get('/hotShop').then(res => {
            var result = res.data.data.slice(this.shopNum - 5, this.shopNum)
            if(result.length !== 0){
              this.hotShopList.concat(result)
              this.busy = false
              this.shopNum += 5
              console.log(result)
            }else {

            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
