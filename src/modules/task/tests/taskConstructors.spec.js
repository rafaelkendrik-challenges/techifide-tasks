import { TaskStatus } from '../data/taskConstructors'

jest.mock('../data/taskConstants', () => ({
  TASK_STATUSES: {
    foo: 'Foo',
    bar: 'Bar',
    baz: 'Baz'
  }
}))

describe('TaskStatus Class', () => {
  describe('constructor()', () => {
    it('When ref is empty, should throws a ReferenceError', () => {
      expect.assertions(1)

      try {
        new TaskStatus()
      }
      catch (error) {
        expect(error).toBeInstanceOf(ReferenceError)
      }
    })

    it('When ref is passed as arg, instance should contains a label', () => {
      const taskStatus = new TaskStatus('bar')

      expect(taskStatus.label).toBe('Bar')
    })
  })

  describe('canProceedTo()', () => {
    it('Should returns if status can be updated to the informed status', () => {
      const taskStatus = new TaskStatus('bar')

      expect(taskStatus.canProceedTo('baz')).toBe(true)
      expect(taskStatus.canProceedTo('foo')).not.toBe(true)
      expect(taskStatus.canProceedTo('bar')).not.toBe(true)
      expect(taskStatus.canProceedTo('qux')).not.toBe(true)
    })
  })
})
