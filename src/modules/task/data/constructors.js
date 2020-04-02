import { STATUS_LABELS, STATUS_NAMES } from './constants'

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
