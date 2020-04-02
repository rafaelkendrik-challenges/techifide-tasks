export const fetchTasks = () => Promise.resolve([
    { title: 'task title', statusId: 0, description: 'this is the description of a pending task', timestamp: 987654321 },
    { title: 'task title', statusId: 1, description: 'this is the description of a in-progress task', timestamp: 987654321 },
    { title: 'task title', statusId: 2, description: 'this is the description of a already done task', timestamp: 987654321 }
])
