import mutations from '../data/taskMutations'
import { Task, TaskStatus } from '../data/taskConstructors'
import { SET_TASK, SET_TASKS, SET_TASK_STATUS } from '../data/taskTypes'

jest.mock('../data/taskConstants', () => ({
  TASK_STATUSES_ENUM: {
    foo: 'Foo',
    bar: 'Bar',
    baz: 'Baz'
  }
}))

describe('taskMutations', () => {
  describe('setTasks()', () => {
    it('When called, should add tasks to store.tasks', () => {
      const state = { tasks: [] }

      const tasksData = [{
        id: '001',
        title: 'Task Title 01',
        description: 'Task Description',
        timestamp: (new Date()).getTime(),
        statusRef: 'foo'
      }, {
        id: '002',
        title: 'Task Title 02',
        description: 'Task Description',
        timestamp: (new Date()).getTime(),
        statusRef: 'baz'
      }]

      const tasks = tasksData
        .map(taskData => new Task(taskData))

      mutations[SET_TASKS](state, tasksData)

      expect(state.tasks).toEqual(tasks)
    })
  })

  describe('setTask()', () => {
    it('When called, should add task to store.tasks', () => {
      const state = { tasks: [] }

      const taskData = {
        id: '001',
        title: 'Task Title',
        description: 'Task Description',
        timestamp: (new Date()).getTime(),
        statusRef: 'foo'
      }

      const task = new Task(taskData)

      mutations[SET_TASK](state, taskData)

      expect(state.tasks[0]).toEqual(task)
    })
  })

  describe('setTaskStatus()', () => {
    it('When called, should update taskStatus in store.tasks', () => {
      const state = {
        tasks: [{
          id: '001',
          title: 'Task Title',
          description: 'Task Description',
          timestamp: (new Date()).getTime(),
          statusRef: 'foo'
        }]
      }

      const taskData = {
        id: '001',
        statusRef: 'baz'
      }

      const taskStatus = new TaskStatus(taskData.statusRef)

      mutations[SET_TASK_STATUS](state, taskData)

      expect(state.tasks[0].status).toEqual(taskStatus)
    })
  })
})
