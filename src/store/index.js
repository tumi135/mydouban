/**
 * Created by ASUS on 2018/8/20.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state :{
    myValue: 'yuyuyu',
    myValue2: 'xiaoxiao'
  },

  mutations :{
    change (state, value) {
      state[value[0]] = value[1]
    }
  }
})
