import * as actions from '../data/taskActions'
import { SET_TASK, SET_TASKS, SET_TASK_STATUS } from '../data/taskTypes'

jest.mock('../data/taskServices', () => ({
  fetchTasks: () => Promise.resolve([{
    id: '001'
  }])
}))

describe('taskActions', () => {
  describe('retrieveTasks()', () => {
    it('When called should fetch tasks, then pass response to SET_TASKS commit', async () => {
      expect.assertions(1)

      const store = {
        commit: jest.fn()
      }

      await actions.retrieveTasks(store)

      expect(store.commit).toHaveBeenCalledWith(SET_TASKS, [{
        id: '001'
      }])
    })
  })
})
