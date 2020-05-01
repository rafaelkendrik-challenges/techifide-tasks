import * as actions from '../data/taskActions'
import getters from '../data/taskGetters'
import mutations from '../data/taskMutations'
import { Task } from '../data/taskConstructors'

import {
  SET_TASKS,
  PUSH_TASK,
  SET_TASK_STATUS,
  GET_TASKS_LENGTH
} from '../data/taskTypes'

jest.mock('../data/taskConstants', () => ({
  TASK_STATUSES_ENUM: {
    'status-0': 'Status 0',
    'status-1': 'Status 1',
    'status-2': 'Status 2'
  }
}))

jest.mock('../data/taskServices')

describe('Task Store', () => {
  let tasksData = []
  let store = {}

  beforeEach(() => {
    tasksData = [
      { id: '001', statusRef: 'status-0' },
      { id: '002', statusRef: 'status-1' }
    ]

    store = {
      state: {
        tasks: []
      },

      commit: jest.fn()
    }
  })

  describe('Mutations', () => {
    it('should sets a collection of tasks in store.tasks', () => {
      const tasks = tasksData.map(taskData => new Task(taskData))

      mutations[SET_TASKS](store.state, tasksData)

      expect(store.state.tasks).toEqual(tasks)
    })

    it('should pushes on task in store.tasks', () => {
      const [taskData] = tasksData
      const task = new Task(taskData)

      mutations[PUSH_TASK](store.state, taskData)

      const [taskInStore] = store.state.tasks
      expect(taskInStore).toEqual(task)
    })

    it('should sets a new status to a task', () => {
      const [taskData] = tasksData
      const taskStatusData = {
        id: '001',
        statusRef: 'status-2'
      }

      mutations[PUSH_TASK](store.state, taskData)
      mutations[SET_TASK_STATUS](store.state, taskStatusData)

      const [taskInStore] = store.state.tasks
      expect(taskInStore.status.ref).toBe(taskStatusData.statusRef)
    })
  })

  describe('Getters', () => {
    it('should returns the total items of store.tasks collection', () => {
      mutations[SET_TASKS](store.state, tasksData)

      const tasksLength = getters[GET_TASKS_LENGTH](store.state)

      expect(tasksLength).toBe(2)
    })
  })

  describe('Actions', () => {
    it('when successfully fetched tasks should calls SET_TASKS mutations passing the returned tasks', async () => {
      expect.assertions(1)

      const { fetchTasks } = await import('../data/taskServices')
      fetchTasks.mockResolvedValue(tasksData)

      await actions.retrieveTasks(store)

      expect(store.commit).toHaveBeenCalledWith(SET_TASKS, tasksData)
    })
  })
})
