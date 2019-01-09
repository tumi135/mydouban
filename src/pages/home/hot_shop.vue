<template>
    <div class="hot-shop" v-infinite-scroll="updateHotShop" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
      <div class="db_shop_item" v-for="shop in hotShopList" :key="shop.id">
        <div class="shop_top">
          <img :src="shop.icon">
          <span class="shop_name">{{shop.name}}</span>
          <p class="shop_intrduction">{{shop.intrduction}}</p>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
      data (){
        return {

        }
      },
    computed : {
      ...mapState(['hotShopList'])
    },
      methods : {
        ...mapActions(['updateHotShop'])
      }

    }
</script>

<style scoped>
.shop_name{
  font-size: 32px;
  color: #795da3;
}
</style>
