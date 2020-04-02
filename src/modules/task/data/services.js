export const fetchTasks = () => Promise.resolve([
  { id: 'id001', title: 'task title', statusId: 0, description: 'this is the description of a pending task', timestamp: 987654321 },
  { id: 'id002', title: 'task title', statusId: 1, description: 'this is the description of a in-progress task', timestamp: 987654321 },
  { id: 'id003', title: 'task title', statusId: 2, description: 'this is the description of a already done task', timestamp: 987654321 }
])

export const storeTask = ({ title, description }) => Promise.resolve({
  id: 'id004', title, description, statusId: 0, timestamp: 987654321
})

export const storeTaskStatus = () => Promise.resolve()
