export const fetchTasks = () =>
  fakeAxios('/tasks')

export const storeTask = params =>
  fakeAxios('/task', params)

export const storeTaskStatus = params =>
  fakeAxios('/task/status', params)

/** @description Conside this part only for mocking propose, in a real world application, this function is replaced by an HTTP client, axios for e.g. */
const fakeAxios = (url, params) => {
  if (url === '/tasks') {
    return Promise.resolve([
      { id: 'id001', title: 'task title', statusId: 0, description: 'this is the description of a pending task', timestamp: 1585875534055 },
      { id: 'id002', title: 'task title', statusId: 1, description: 'this is the description of a in-progress task', timestamp: 1585875534055 },
      { id: 'id003', title: 'task title', statusId: 2, description: 'this is the description of a already done task', timestamp: 1585875534055 }
    ])
  }

  if (url === '/task') {
    const { description, title } = params

    return Promise.resolve({
      id: 'id004', title, description, statusId: 0, timestamp: (new Date()).getTime()
    })
  }

  if (url === '/task/status') {
    return Promise.resolve()
  }
}
