<template>
    <div class="list">
      <list-head :itNowId="nowId"></list-head>
      <list-nav></list-nav>
      <div class="items">
        <a href="#" v-for="(item, index) in itemsList" :key="index" :class="{active: index == activeIndex}" @click="changItem($event, index)">
          {{item}}
          <i class="iconfont icon-jiantou_xiangxia"></i>
        </a>
      </div>
      <list-goods></list-goods>
    </div>
</template>

<script>
  import ListHead from './list_head'
  import ListNav from './list_nav'
  import ListGoods from './list_goods'
    export default {
    data (){
      return {
        nowId: null,
        activeIndex: 0,
        itemsList : [
          '总和排序',
          '上架时间',
          '价格',
          '喜欢数'
        ]
      }
    },
    components: {
      ListHead,
      ListNav,
      ListGoods
    },
      mounted (){
        this.nowId = this.$route.params.id
      },
      beforeRouteUpdate (to, from, next){
        this.nowId = to.params.id
        next()
      },
      methods : {
        changItem (e, i){
          if(this.activeIndex === i){
            if(e.target.childNodes[1].className === 'iconfont icon-jiantou_xiangxia'){
              e.target.childNodes[1].className = 'iconfont icon-jiantou_xiangshang'
            }else {
              e.target.childNodes[1].className = 'iconfont icon-jiantou_xiangxia'
            }
          }
          this.activeIndex = i
        }
      }
    }
</script>

<style scoped>
  .items{
    margin-top: 10px;
    width: 100%;
    display: flex;
    display: box;
    display: -webkit-box;
    flex-wrap:nowrap;
    justify-content: center;
    font-size: 12px;
  }
  .items a{
    display: block;
    flex: 1;
    box-flex: 1;
    -webkit-box-flex: 1;
    text-align: center;
    color: #ccc;
    text-decoration: none;
  }
  .items .active{
    color: #f67;
  }
</style>
