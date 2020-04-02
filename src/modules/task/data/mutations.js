import { Task } from './constructors.js'
import { SET_TASKS } from './types'

export default {
  [SET_TASKS] (state, tasks) {
    state.tasks = tasks
      .map(task => new Task(task))
  }
}
