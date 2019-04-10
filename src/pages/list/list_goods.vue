<template>
    <div class="list_goods">
      <ul v-infinite-scroll="updateRated" infinite-scroll-disabled="ratedBusy" infinite-scroll-distance="100">
        <li class="goods-item" v-for="(item,index) in ratedList" :key="index">
          <div class="hot-item">
            <router-link :to="{name: 'detail',params: {id: item.id}}">
              <img :src="item.src" class="goods-img">
              <div class="hot-goods-ifo">
                <h3 class="goods-title">{{item.title}}</h3>
                <span class="newPrice">{{item.newPrice}}</span>
                <del class="oldPrice">{{item.oldPrice}}</del>
                <i class="iconfont icon-shoucang" @click="changeLike($event)"></i>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
      <loading v-show="busy"></loading>
      <none v-show="noneBuzy"></none>
    </div>
</template>

<script>
  import axios from 'axios'
  import Loading from '../../components/loading'
  import None from '../../components/none'
  export default {
    data (){
      return {
        like: false,
        busy: false,
        noneBuzy: false,
        ratedList: [],
        ratedBusy: false,
        ratedNum: 6

      }
    },
    components : {
      Loading,
      None
    },
    methods: {
      updateRated (){
        this.ratedBusy = true
        this.busy = true
        let self = this
        axios.get('/hotProducts').then(res => {
          var result = res.data.data.slice(this.ratedNum - 6, this.ratedNum)
          setTimeout(function () {
            if(result.length !== 0){
              self.ratedList = self.ratedList.concat(result)
              self.busy = false
              self.ratedBusy = false
              self.ratedNum += 6
            }else {
              self.busy = false
              self.noneBuzy = true
            }
          }, 1000)
        })
      },
      changeLike (e){
        if(e.target.className === 'iconfont icon-shoucang'){
          e.target.className = 'iconfont icon-heart-fill'
        }else{
          e.target.className = 'iconfont icon-shoucang'
        }
        e.preventDefault()
      }
    }
  }
</script>

<style scoped>
  .list_goods{
    width: 100vw;
    padding: 2vw;
    box-sizing: border-box;
  }
  .goods-item{
    display: inline-block;
    list-style: none;
    width: 47vw;
    height: 80vw;
    background: #ffffff;
    margin-bottom: 2vw;
    border: 1px solid #c6c6c6;
    box-sizing: border-box;
  }
  .hot-item>a{
    text-decoration:none;
  }
  .goods-item:nth-last-of-type(odd){
    margin-left: 2vw;
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
  .icon-shoucang,.icon-heart-fill{
    float: right;
    margin-right: 6px;
    font-size: 14px;
    color: #e17c72;
  }
</style>
