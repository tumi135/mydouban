<template>
    <div class="hot-goods">
      <ul>
        <li class="goods-item" v-for="(item,index) in list" :key="index">
          <div class="hot-item">
            <router-link :to="{name:'detail',params: {id: item.id}}">
              <img :src="item.src" class="goods-img">
              <div class="hot-goods-ifo">
                <h3 class="goods-title">{{item.title}}</h3>
                <span class="newPrice">{{item.newPrice}}</span>
                <del class="oldPrice">{{item.oldPrice}}</del>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
    data (){
      return {
        list : {}
      }
    },
      created (){
        axios.get('/hotProducts').then(res => {
          if(res.data.code === 0){
            this.list = res.data.data.slice(0, 6)
          }
        })
      }
    }
</script>

<style scoped>
  .hot-goods{
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
</style>
