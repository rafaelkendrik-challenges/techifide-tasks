import state from './taskState'
import mutations from './taskMutations'
import * as actions from './taskActions'
import * as getters from './taskGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
