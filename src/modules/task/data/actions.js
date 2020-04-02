import { fetchTasks, storeTask, storeTaskStatus } from './services'
import { SET_TASKS, SET_TASK, SET_TASK_STATUS } from './types'

export const retrieveTasks = async ({ commit }) => {
  const tasks = await fetchTasks()
  commit(SET_TASKS, tasks)
}

export const createTask = async ({ commit }, { title, description }) => {
  if (!title || !description) {
    return
  }

  const task = await storeTask({ title, description })
  commit(SET_TASK, task)
}

export const updateTaskStatus = ({ commit }, {
  id,
  currentStatus,
  statusId
}) => {
  if (currentStatus.id >= statusId) {
    return
  }

  storeTaskStatus({ id, statusId })
    .then(() => {
      commit(SET_TASK_STATUS, { id, statusId })
    })
}
