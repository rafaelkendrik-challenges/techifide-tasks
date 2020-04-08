export const TASK_STATUS_PENDING_REF = 'pending'
export const TASK_STATUS_PENDING = 'Pending'

export const TASK_STATUS_IN_PROGRESS_REF = 'in-progress'
export const TASK_STATUS_IN_PROGRESS = 'In Progress'

export const TASK_STATUS_DONE_REF = 'done'
export const TASK_STATUS_DONE = 'Done'


/**
 * Task Status Labels Enum by Ids
 * @constant
 * @type {Object}
 */
export const TASK_STATUSES = {
  [TASK_STATUS_PENDING_REF]: TASK_STATUS_PENDING,
  [TASK_STATUS_IN_PROGRESS_REF]: TASK_STATUS_IN_PROGRESS,
  [TASK_STATUS_DONE_REF]: TASK_STATUS_DONE
}

Object.freeze(TASK_STATUSES)
