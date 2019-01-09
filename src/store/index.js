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
    busy: false,
    shopNum: 5
  },
  mutations :{
    change (state, value) {
      state[value[0]] = value[1]
    },
    UPDATEHOTSHOP (state, list) {
      state.hotShopList = state.hotShopList.concat(list)
    }
  },
  actions : {
    updateHotShop ({commit, state}){
      state.busy = true
      axios.get('/hotShop').then(res => {
        var result = res.data.data.slice(state.shopNum - 5, state.shopNum)
        if(result.length !== 0){
          commit('UPDATEHOTSHOP', result)
          state.busy = false
          state.shopNum += 5
          console.log(result)
        }else {

        }
      })
    }
  }
})
