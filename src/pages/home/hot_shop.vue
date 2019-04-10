<template>
    <div class="hot-shop" v-infinite-scroll="updateHotShop" infinite-scroll-disabled="hotShopBusy" infinite-scroll-distance="100">
      <div class="db_shop_item" v-for="shop in hotShopList" :key="shop.id">
        <div class="shop_top">
          <div>
            <img :src="shop.icon">
            <span class="shop_name">{{shop.name}}</span>
          </div>
          <p class="shop_intrduction">{{shop.intrduction}}</p>
        </div>
        <div class="shop_center">
          <div class="shop_product" v-for="sh in shop.products" :key="sh.id">
            <div class="hot-item">
              <a :href="sh.url + '/' + sh.id">
                <img :src="sh.src" class="goods-img">
                <div class="hot-goods-ifo">
                  <h3 class="goods-title">{{sh.title}}</h3>
                  <span class="newPrice">{{sh.newPrice}}</span>
                  <del class="oldPrice">{{sh.oldPrice}}</del>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="shop_buttom">
          <router-link :to="{name: 'shop',params: {id: shop.id}}">进入店铺>></router-link>
        </div>
      </div>
      <loading v-show="busy"></loading>
      <none v-show="noneBuzy"></none>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import Loading from '../../components/loading'
  import None from '../../components/none'

  export default {
      data (){
        return {

        }
      },
    computed : {
        ...mapState({
          hotShopList: 'hotShopList',
          busy: 'busy',
          noneBuzy: 'noneBuzy',
          hotShopBusy: 'hotShopBusy'
        })
    },
    methods : {
        ...mapActions(['updateHotShop'])
    },
    components : {
      Loading,
      None
    }

    }
</script>

<style scoped>
  .db_shop_item{
    background: #ffffff;
    margin-bottom: 5vw;
  }
  .shop_top{
    padding: 5vw 2vw;
  }
  .shop_top>div{
    display: flex;
    align-items: center;
  }
  .shop_top>div>img{
    width: 5vw;
    height: 5vw;
    margin-right: 2vw;
  }
.shop_name{
  font-size: 12px;
}
.shop_intrduction{
  font-size: 18px;
  margin-top: 3vw;
}
.hot-item>a{
  text-decoration:none;
}
.shop_product{
  display: inline-block;
  margin-left: 2vw;
  list-style: none;
  width: 47vw;
  height: 80vw;
  background: #ffffff;
  margin-bottom: 2vw;
  border: 1px solid #c6c6c6;
  box-sizing: border-box;
}

.goods-img{
  width: 47vw;
  height: 63vw;
}
.goods-title{
  display: block;
  padding: 5px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #ccc;
  font-size: 14px
}
.newPrice{
  color: #e17c72;
  font-weight: 600;
}
.oldPrice{
  color: #ccc
}
  .shop_buttom{
    padding: 5vw 2vw;
    text-align: right;
  }
  .shop_buttom>a{
    color: black;
  }
</style>
