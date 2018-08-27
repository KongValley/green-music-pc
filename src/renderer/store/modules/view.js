import Cookies from 'js-cookie'

const view = {
  state: {
    themeColor: Cookies.get('themeColor') || 'green'
  },
  mutations: {
    SET_COLOR: (state, themeColor) => {
      state.themeColor = themeColor
      Cookies.set('themeColor', themeColor)
    }
  },
  actions: {
    changeColor ({commit}, themeColor) {
      commit('SET_COLOR', themeColor)
    }
  }
}

export default view
