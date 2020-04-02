/**
 * Status Labels Enum
 * @constant
 * @type {Array}
 */
const STATUS_LABELS = {
  0: 'Pending',
  1: 'In Progress',
  2: 'Done'
}

/**
 * Status Names Enum - Status Labels Enum in kebab-case
 * @constant
 * @type {Array}
 */
const STATUS_NAMES = Object.entries(STATUS_LABELS)
  .reduce((acc,[id, label]) => (
    acc[id] = label
      .toLowerCase()
      .split(' ')
      .join('-'),
    acc
  ), {})

/**
 * Task Status Class.
 * @constructor
 * @param {string} id - The ID of the task status.
 */
export class TaskStatus {
  constructor (id) {
    this.id = id
    this.label = this._getLabel()
    this.name = this._getName()
  }

  /** @private */
  _getLabel () {
    return STATUS_LABELS[this.id]
  }

  /** @private */
  _getName () {
    return STATUS_NAMES[this.id]
  }
}


/**
 * Task Class.
 * @constructor
 * @param {string} id - The ID of the task.
 * @param {string} title - The title of the task.
 * @param {string} description - The description of the task.
 * @param {number} timestamp - The timestamp of the task.
 * @param {number} statusId - The status id of the task.
 */
export class Task {
  constructor ({ id, title, statusId, description, timestamp }) {
    this.id = id
    this.title = title
    this.description = description
    this.timestamp = timestamp
    this.status = new TaskStatus(statusId)
  }
}
