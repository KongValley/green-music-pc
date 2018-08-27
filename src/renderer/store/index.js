import Vue from 'vue'
import Vuex from 'vuex'
import view from './modules/view'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    view
  },
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
export default store
