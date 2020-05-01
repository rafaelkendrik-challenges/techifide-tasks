import getters from '../data/taskGetters'
import mutations from '../data/taskMutations'
import { Task } from '../data/taskConstructors'

import {
  SET_TASKS,
  GET_TASKS_LENGTH
} from '../data/taskTypes'

jest.mock('../data/taskConstants', () => ({
  TASK_STATUSES_ENUM: {
    'status-0': 'Status 0',
    'status-1': 'Status 1',
    'status-2': 'Status 2'
  }
}))

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

  describe('Getters', () => {
    it('should returns the total items of tasks collection', () => {
      mutations[SET_TASKS](store.state, tasksData)

      const tasksLength = getters[GET_TASKS_LENGTH](store.state)

      expect(tasksLength).toBe(2)
    })
  })
})
