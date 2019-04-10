/**
 * Created by ASUS on 2018/8/20.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state :{
    myValue: 'yuyuyu',
    myValue2: 'xiaoxiao',
    hotShopList: [],
    hotShopBusy: false,
    busy: false,
    noneBuzy: false,
    shopNum: 5,
    categorys:[
      {text:'饮食', url:'/list/1', class_name:'red'},
      {text:'服装', url:'/list/2', class_name:'blue'},
      {text:'配饰', url:'/list/3', class_name:'purple'},
      {text:'包袋', url:'/list/4', class_name:'sky'},
      {text:'鞋靴', url:'/list/5', class_name:'yellow'},
      {text:'美容', url:'/list/6', class_name:'pink'},
      {text:'家居', url:'/list/7', class_name:'grass'},
      {text:'时间', url:'/list/8', class_name:'green'},
      {text:'数码', url:'/list/9', class_name:'red'}
    ]
  },
  mutations :{
    change (state, value) {
      state[value[0]] = value[1]
    },
    UPDATEHOTSHOP (state, list) {
      state.hotShopList = state.hotShopList.concat(list)
    },
    CHANGEBUSY (state, value){
      state.busy = value
    },
    CHANGENONEBUZY (state, value){
      state.noneBuzy = value
    }
  },
  actions : {
    updateHotShop ({commit, state}){
      state.hotShopBusy = true
      commit('CHANGEBUSY', true)
      axios.get('/hotShop').then(res => {
        var result = res.data.data.slice(state.shopNum - 5, state.shopNum)
        setTimeout(function () {
          if(result.length !== 0){
            commit('UPDATEHOTSHOP', result)
            commit('CHANGEBUSY', false)
            state.hotShopBusy = false
            state.shopNum += 5
          }else {
            commit('CHANGEBUSY', false)
            commit('CHANGENONEBUZY', true)
          }
        }, 500)
      })
    }
  }
})
