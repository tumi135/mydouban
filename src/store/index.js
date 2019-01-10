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
    shopNum: 5
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
