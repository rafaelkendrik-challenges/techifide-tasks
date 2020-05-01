import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

import { Task } from '../data/taskConstructors'
import TaskList from '../components/TaskList'
import TaskItem from '../components/TaskItem'

// TODO: REFACTOR

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TaskList Component', () => {
  const storeFactory = ({ state }) => new Vuex.Store({
    modules: {
      task: {
        namespaced: true,

        state,

        actions: {
          retrieveTasks: jest.fn
        }
      }
    }
  })

  describe('When there are tasks in state', () => {
    let store
    let wrapper

    beforeEach(() => {
      store = storeFactory({
        state: {
          tasks: [
            new Task({ id: 'id001', statusRef: 'foo' })
          ]
        }
      })

      wrapper = mount(TaskList, { store, localVue })
    })

    it('TaskItem should be mounted', () => {
      expect(wrapper.find(TaskItem).exists()).toBe(true)
    })

    it('Should not display empty-message', () => {
      expect(wrapper.html()).not.toContain('list__empty-message')
    })
  })

  describe('When there is NO task in state', () => {
    let store
    let wrapper

    beforeEach(() => {
      store = storeFactory({
        state: {
          tasks: []
        }
      })

      wrapper = mount(TaskList, { store, localVue })
    })

    it('TaskItem should NOT be mounted', () => {
      expect(wrapper.find(TaskItem).exists()).toBe(false)
    })

    it('Should displays element containing empty-message class', () => {
      expect(wrapper.html()).toContain('list__empty-message')
    })
  })
})
