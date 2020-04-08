import { Task, TaskStatus } from './taskConstructors'
import { SET_TASKS, SET_TASK, SET_TASK_STATUS } from './taskTypes'

export default {
  [SET_TASKS] (state, tasks) {
    state.tasks = tasks
      .map(task => new Task(task))
  },

  [SET_TASK] (state, task) {
    state.tasks.push(new Task(task))
  },

  [SET_TASK_STATUS] (state, { id, statusRef }) {
    const taskIndex = state.tasks
      .findIndex(task => task.id === id)

    state.tasks[taskIndex].status = new TaskStatus(statusRef)
  }
}
