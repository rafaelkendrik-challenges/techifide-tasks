import state from './taskState'
import mutations from './taskMutations'
import getters from './taskGetters'
import * as actions from './taskActions'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
