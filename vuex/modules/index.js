import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import * from './getters'
import * from './mutations'
import * from './actions'

import auth from './modules/auth'
import shopping from './modules/shopping'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth,
    shopping
  }
})

//IMPORTANT: When using namespaced: true inside the modules, we need to refer to them via namespace e.g.
//...mapGetters({
//  cart:'shopping/cart'
//})

//IMPORTANT: When dispatching messages, they will be checked against the namespace automatically e.g.
// dispatch('message', 'Example message'), will be treated as dispatch('some-namespace/message', 'Esample message')
//In case that we need to dispatch directly to root use this instead
// dispatch('message', 'Example message', {root: true})
