<template>
    <div class="rated">
      <div class="rated_top">
        <span class="pj">综合评分<span class="red">{{score}}</span></span>
        <span class="jb">
          <span>很好<span class="red">5</span></span>
          <span>较好<span class="red">4</span></span>
          <span>一般<span class="red">3</span></span>
          <span>差<span class="red">2</span></span>
          <span>极差<span class="red">1</span></span>
        </span>
      </div>
      <div class="rated_list" v-infinite-scroll="updateRated" infinite-scroll-disabled="ratedBusy" infinite-scroll-distance="60">
        <div class="rated_item" v-for="(item,index) in ratedList" :key="index">
          <div class="user_tops">
            <div class="user_img">
              <img :src="item.head_portrait">
            </div>
            <span class="user_name">{{item.user}}</span>
            <span class="user_time">{{item.time}}</span>
            <span class="user_score">{{item.score}}</span>
          </div>
          <div class="comment_text">{{item.comment_text}}</div>
          <div class="comment_picture" v-if="item.comment_picture">
            <img :key="i" v-for="(myItem,i) in item.comment_picture" :src="myItem">
          </div>
        </div>
      </div>
      <loading v-show="busy"></loading>
      <none v-show="noneBuzy"></none>
    </div>
</template>

<script>
  import Loading from '../../components/loading'
  import None from '../../components/none'
  import axios from 'axios'
    export default {
      props: ['score', 'isFirst'],
      data (){
        return {
          busy: false,
          noneBuzy: false,
          ratedList: [],
          ratedBusy: false,
          ratedNum: 6,
          myFirst: false
        }
      },
      components : {
        Loading,
        None
      },
      watch :{
        isFirst (newVal){
          this.myFirst = newVal
        }
      },
      methods: {
        updateRated (){
          if(this.myFirst){
            this.ratedBusy = true
            this.busy = true
            let self = this
            axios.get('/detailEvaluate').then(res => {
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
              }, 2000)
            })
          }
        }
      }
    }
</script>

<style scoped>
.rated_top{
  width: 100%;
  padding: 5vw;
  box-sizing: border-box;
  border-bottom: 1px solid #cbcbcb;
}
  .pj{
    margin-bottom: 5vw;
    display: block;
    width: 100%;
    text-align: center;
    color: #9d9d9d;
    font-size: 16px;
  }
  .red{
    color: #ff5a4b;
    padding-left: 3px;
  }
  .jb{
    display: block;
    width: 100%;
    text-align: center;
    color: #bbbbbb;
    font-size: 12px;
  }
  .jb>span{
    padding: 6px;
  }
  .rated_list{
    width: 100%;
    padding: 5vw;
    box-sizing: border-box;
  }
  .rated_item{
    border-bottom:  1px solid #cbcbcb;
    padding: 5vw 0vw;
  }
  .user_tops{
    display: flex;
    align-items: center;
  }
  .user_img{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
  }
  .user_img>img{
    width: 100%;
    height: 100%;
  }
  .user_tops>span{
    margin-left: 12px;
  }
  .user_name{
    color: #666666;
    font-size: 14px;
  }
  .user_time{
    color: #bbbbbb;
    font-size: 12px;
  }
  .user_score{
    font-size: 14px;
    color: #ff5a4b;
  }
  .comment_text{
    width: 100%;
    padding: 5vw;
    font-size: 14px;
    box-sizing: border-box;
  }
  .comment_picture{
    width: 100%;
  }
  .comment_picture>img{
    width: 20vw;
    height: 20vw;
    margin: 5vw;
  }
</style>
