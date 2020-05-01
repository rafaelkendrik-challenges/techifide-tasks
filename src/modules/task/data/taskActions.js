import { fetchTasks, storeTask, storeTaskStatus } from './taskServices'
import { SET_TASKS, SET_TASK, SET_TASK_STATUS } from './taskTypes'

// TODO: REFACTOR TO NEW PATTERN

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

export const updateTaskStatus = async ({ commit }, {
  id,
  status,
  nextStatusRef
}) => {
  if (!status.canProceedTo(nextStatusRef)) {
    return
  }

  const task = await storeTaskStatus({ id, statusRef: nextStatusRef })
  commit(SET_TASK_STATUS, task)
}
