import { GET_TASKS_LENGTH } from './taskTypes'

const getters = {}

getters[GET_TASKS_LENGTH] = state => (
  state.tasks.length
)

export default getters
