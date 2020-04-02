import { Task, TaskStatus } from './constructors'
import { SET_TASKS, SET_TASK_STATUS } from './types'

export default {
  [SET_TASKS] (state, tasks) {
    state.tasks = tasks
      .map(task => new Task(task))
  },

  [SET_TASK_STATUS] (state, { id, statusId }) {
    const taskIndex = state.tasks.findIndex(task => task.id === id)
    state.tasks[taskIndex].status = new TaskStatus(statusId)
  }
}
