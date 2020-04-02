import { fetchTasks, storeTaskStatus } from './services'
import { SET_TASKS, SET_TASK_STATUS } from './types'

export const fetchAndSetTasks = async ({ commit }) => {
  const tasks = await fetchTasks()
  commit(SET_TASKS, tasks)
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
