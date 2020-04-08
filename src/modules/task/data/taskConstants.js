export const STATUS_PENDING = 'pending'
export const STATUS_PENDING_LABEL = 'Pending'
export const STATUS_PENDING_ID = 0

export const STATUS_IN_PROGRESS = 'in-progress'
export const STATUS_IN_PROGRESS_LABEL = 'In Progress'
export const STATUS_IN_PROGRESS_ID = 1

export const STATUS_DONE = 'done'
export const STATUS_DONE_LABEL = 'Done'
export const STATUS_DONE_ID = 2

/**
 * Status Names Enum by Ids
 * @constant
 * @type {Object}
 */
export const STATUS_NAMES = {
  [STATUS_PENDING_ID]: STATUS_PENDING,
  [STATUS_IN_PROGRESS_ID]: STATUS_IN_PROGRESS,
  [STATUS_DONE_ID]: STATUS_DONE
}

Object.freeze(STATUS_NAMES)

/**
 * Status Labels Enum by Ids
 * @constant
 * @type {Object}
 */
export const STATUS_LABELS = {
  [STATUS_PENDING_ID]: STATUS_PENDING_LABEL,
  [STATUS_IN_PROGRESS_ID]: STATUS_IN_PROGRESS_LABEL,
  [STATUS_DONE_ID]: STATUS_DONE_LABEL
}

Object.freeze(STATUS_LABELS)
