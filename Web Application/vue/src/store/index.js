import { createStore } from 'vuex'

export default createStore({
  state: {
    appName: 'Aprycot'
  },
  getters: {
    appName: state => { return state.appName }
  },
  mutations: {
  },
  actions: {

  }

})
