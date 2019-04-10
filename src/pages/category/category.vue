<template>
  <div class="category">
    <head-bar></head-bar>
    <nav-bar></nav-bar>
    <div class="category_list">
      <ul>
        <li v-for="(item,index) in categorysList" :key="index">
          <router-link :to="item.url" :class="item.class_name">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import HeadBar from '../../components/head'
  import NavBar from '../../components/nav'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        categorysList: 'categorys'
      })
    },
    components:{
      HeadBar,
      NavBar
    }
  }
</script>
<style scoped>
  .category_list{
    font-size: 0;
    padding: 5vw;
    text-align: center;
    box-sizing: border-box;
  }
  .category_list ul li{
    list-style: none;
    display: inline-block;
    width: 25vw;
    height: 18vw;
    margin: 0 2.5vw 2vw;
  }
  .category_list a{
    display: block;
    line-height: 18vw;
    text-align: center;
    color: #4a4a4a;
    font-size: 14px;
    border-radius: 5px;
  }
  .category_list .red{
    background-color: #ffb2bb;
  }
  .category_list .blue{
    background-color: #89b7ec;
  }
  .category_list .purple{
    background-color: #c2a0e0;
  }
  .category_list .sky{
    background-color: #b2e6ff;
  }
  .category_list .yellow{
    background-color: #e6e7a4;
  }
  .category_list .pink{
    background-color: #e0a0d1;
  }
  .category_list .grass{
    background-color: #b2ffc5;
  }
  .category_list .green{
    background-color: #ffb2bb;
  }
</style>
