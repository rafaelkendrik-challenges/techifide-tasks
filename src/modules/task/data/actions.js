import { fetchTasks } from './services'
import { SET_TASKS } from './types'

export const fetchAndSetTasks = async ({ commit }) => {
  const tasks = await fetchTasks()
  commit(SET_TASKS, tasks)
}
