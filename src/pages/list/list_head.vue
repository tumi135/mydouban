<template>
  <div class="list_head">
    <div class="head_top">
      <router-link to="/home">首页</router-link>
      <div class="head_title" @click="showw = true">{{nowList.text}}<i class="iconfont icon-jiantouxia"></i></div>
      <transition name="fade">
        <div class="category_box" v-show="showw" @click="showw = false">
          <div>
            <ul @click.stop="">
              <li v-for="(item,index) in categorys" :key="index" :class="{myActive: index == itNowId - 1}">
                <router-link :to="{name: 'list', params:{id: item.id}}">{{item.text}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['itNowId'],
      data (){
        return {
          showw: false,
          nowList: {id: null, text: null},
          categorys:[
            {id: 1, text:'饮食'},
            {id: 2, text:'服装'},
            {id: 3, text:'配饰'},
            {id: 4, text:'包袋'},
            {id: 5, text:'鞋靴'},
            {id: 6, text:'美容'},
            {id: 7, text:'家居'},
            {id: 8, text:'时间'},
            {id: 9, text:'数码'},
            {id: 6, text:'美容'},
            {id: 7, text:'家居'},
            {id: 8, text:'时间'},
            {id: 9, text:'数码'}
          ]
        }
      },
      methods: {
        changeShow (){
          this.showw = !this.showw
        }
      },
      watch :{
        itNowId (){
          this.showw = false
          let len = this.categorys.length
          this.nowId = parseInt(this.$route.params.id)
          for (let i = 0; i < len; i++){
            if(this.categorys[i].id === this.nowId){
              this.nowList = this.categorys[i]
              return
            }
          }
        }
      }
    }
</script>

<style scoped>
  .head_top{
    position: relative;
    height: 40px;
    line-height: 40px;
    width: 100%;
  }
  .head_top>a{
    text-decoration: none;
    font-size: 18px;
    color: #666666;
    padding-left: 18px;
  }
  .head_title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 18px;
    color: #55a532;
  }
  .head_title>i{
    margin-left: 6px;
    font-size: 18px;
    color: #55a532;
    vertical-align: sub;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave{
    opacity: 0;
  }
  .category_box{
    position: fixed;
    z-index: 100;
    top: 0vw;
    left: 0vw;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
  }
  .category_box>div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50vw;
    height: 50vh;
    background: #ffff;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .category_box>div>ul{
    width: 100%;
  }
  .category_box>div>ul>li{
    list-style: none;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .category_box>div>ul>.myActive{
    background: #666666;
  }
  .category_box>div>ul>li>a{
    font-size: 16px;
    color: black;
    text-decoration: none;
  }
</style>
