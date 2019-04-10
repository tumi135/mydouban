<template>
    <div class="detail">
      <div class="back">
        <i class="iconfont icon-left-circle" v-on:click="goBack"></i>
      </div>
      <detail-slider v-bind:detailSlider="detailIfo.slider"></detail-slider>
      <div class="detail_ifo">
        <div class="title">{{detailIfo.title}}</div>
        <div class="price">
          <span class="now_price">￥{{detailIfo.now_price}}</span>
          <del class="old_price">￥{{detailIfo.old_price}}</del>
        </div>
        <div class="freight">
          <span class="fre_price">运费： ￥{{detailIfo.fre_price}}</span>
          <span class="fre_tips">非包邮区域</span>
        </div>
        <div class="number">库存：{{detailIfo.number}}</div>
      </div>
      <div class="chose">
        <div class="chose_item" v-for="(value, key, index) in detailIfo.choice" :key="index">
          <span class="chose_title">{{key}}</span>
          <div class="chose_box">
            <button v-for="(item, i) in value" :key="i" v-on:click="choseFun($event)">{{item}}</button>
          </div>
        </div>
      </div>
      <div class="num_control">
        <span class="chose_title">数量</span>
        <div class="num_box">
          <div>
            <i class="iconfont icon-minus-circle-fill" v-on:click="minus" :class="{min: number === 1}"></i>
            <input type="number" class="nums" v-model="number" v-on:input="numberCtrol"/>
            <i class="iconfont icon-plus-circle-fill" v-on:click="add" :class="{max: number === parseInt(detailIfo.number)}"></i>
          </div>
        </div>
      </div>
      <div class="db_detail_promise">
        <span>豆瓣市集担保</span>
        <span>|七天无理由退货</span>
        <span>|正品保证</span>
        <span>|独立品牌</span>
      </div>
      <div class="tab">
        <span @click="changeTab(0)" :class="{tabActive: isActive == 0}">商品详情</span>
        <span @click="changeTab(1)" :class="{tabActive: isActive == 1}">评价</span>
      </div>
      <div class="conts">
        <div class="tabDetail" v-show="isActive == 0">
          <img v-for="(item,index) in detailIfo.details" :key="index" :src="item">
        </div>
        <rated v-show="isActive == 1" :isFirst="first" :score="detailIfo.overall_score"></rated>
      </div>
      <div class="buy_button">
        <button class="go_car">加入购物车</button>
        <button class="pay">立即购买</button>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import DetailSlider from './detail_slider'
  import Rated from './rated'
    export default {
      data () {
        return {
          paramId: '988',
          detailIfo: {},
          choseIndex: 0,
          number: 1,
          isActive:0,
          first: false
        }
      },
      components: {
        DetailSlider,
        Rated
      },
      beforeRouteEnter (to, from, next){
        next(vm => {
          vm.paramId = parseInt(to.params.id)
          if(vm.paramId != null){
            let myId = vm.paramId
            if(myId % 2 === 1){
              axios.get('/detailSlider').then(res => {
                if(res.data.code === 0){
                  vm.detailIfo = res.data.data[0]
                }
              })
            }else {
              axios.get('/detailSlider').then(res => {
                if(res.data.code === 0){
                  vm.detailIfo = res.data.data[1]
                }
              })
            }
          }
        })
      },
      methods: {
        goBack (){
          if(window.history.length <= 1){
            this.$router.push({name: 'home'})
          }else {
            this.$router.back()
          }
        },
        choseFun (e){
          let len = e.target.parentElement.childNodes.length
          for (let i = 0; i < len; i++){
            e.target.parentElement.childNodes[i].classList.remove('chosing')
          }
          e.target.classList.add('chosing')
        },
        add (){
          if(this.number < parseInt(this.detailIfo.number)){
            this.number++
          }
        },
        minus (){
          if(this.number > 1){
            this.number--
          }
        },
        numberCtrol (){
          if(this.number > parseInt(this.detailIfo.number)){
            alert('数量不能大于库存')
            this.number = parseInt(this.detailIfo.number)
          }else if(this.number < 1){
            alert('数量不能小于1')
            this.number = 1
          }
        },
        changeTab (tabId){
          this.isActive = tabId
          if(tabId === 1){
            this.first = true
          }
        }
      },

      created () {

      }
    }
</script>
<style scoped>
  .back{
    position: fixed;
    top: 20px;
    left: 20px;
    width: 30px;
    height: 30px;
    z-index: 99;
  }
  .icon-left-circle{
    font-size: 26px;
    vertical-align: sub;
    color: #a5a5a5;
  }
  .detail_ifo{
    width: 100%;
    padding: 5vw;
    box-sizing: border-box;
    border-bottom: 1px solid #cbcbcb;
  }
  .detail_ifo>div{
    margin-bottom: 2vw;
  }
  .detail_ifo>div:last-of-type{
    margin-bottom: 0vw;
  }
  .title{
    font-size: 18px;
    font-weight: 500;
  }
  .now_price{
    font-size: 18px;
    font-weight: 600;
    color: #ff5a4b;
  }
  .old_price{
    font-size: 18px;
    color: #666666;
  }
  .fre_price{
    font-size: 16px;
  }
  .fre_tips{
    font-size: 16px;
    color: #ff5a4b;
  }
  .number{
    font-size: 16px;
  }
  .chose{
    width: 100%;
    padding: 5vw;
    box-sizing: border-box;
    border-bottom: 1px solid #cbcbcb;
  }
  .chose_item{
    margin-bottom: 2vw;
  }
  .chose_item:last-of-type{
    margin-bottom: 0px;
  }
  .chose_title{
    display: inline-block;
    font-size: 16px;
    color: #666666;
    width: 16vw;
  }
  .chose_box{
    width: 69vw;
    display: inline-block;
    vertical-align: text-top;
  }
  .chose_box button{
    font-size: 14px;
    color: #ffffff;
    background: #9d9d9d;
    width: 20vw;
    height: 8vw;
    border: 0px;
    outline: 0px;
    border-radius: 4vw;
    margin-left: 2vw;
    margin-bottom: 2vw;
  }
  .chose_box .chosing{
    background: #8ab7fd;
  }
  .num_control{
    width: 100%;
    padding: 5vw;
    box-sizing: border-box;
    border-bottom: 1px solid #cbcbcb;
  }
  .num_box{
    width: 69vw;
    display: inline-block;
    vertical-align: text-top;
  }
  .num_box>div{
    display: flex;
    align-items: center;
  }
  .icon-plus-circle-fill,.icon-minus-circle-fill{
    font-size: 24px;
    color: #8ab7fd;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .nums{
    width: 40px;
    height: 24px;
    text-align: center;
    border-radius: 4vw;
    color: #ffff;
    font-size: 14px;
    background: #9d9d9d;
    border: 0px;
    outline: 0px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .min,.max{
    color: #9d9d9d;
  }
  .db_detail_promise{
    width: 100%;
    padding: 2vw 5vw 10vw 5vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

  }
  .db_detail_promise>span{
    font-size: 12px;
    color: #9d9d9d;
  }
  .tab{
    width: 100%;
    border-bottom: 2px solid #ff5a4b;
  }
  .tab>span{
    display: inline-block;
    width: 49%;
    text-align: center;
    font-size: 16px;
    color: #666666;
    padding-bottom: 12px;
  }
  .tab>.tabActive{
    color: #ff5a4b;
  }
  .conts{
    width: 100%;
    padding-bottom: 70px;
  }
  .tabDetail>img{
    width: 100%;
    height: auto;
  }

  .buy_button{
    position: fixed;
    z-index: 99;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    font-size: 0px;
  }
  .buy_button>button{
    display: inline-block;
    width: 50%;
    height: 100%;
    font-size: 16px;
    color: #ffff;
    border: 0px;
    outline: 0px;
  }
  .buy_button>.go_car{
    background: #eba887;
  }
  .buy_button>.pay{
    background: #e17c72;
  }
</style>
