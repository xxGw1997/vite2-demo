import { createStore } from 'vuex'

export default createStore({
  state:{
    couter:0
  },
  mutations:{
    add(state){
      state.couter++
    }
  }
})