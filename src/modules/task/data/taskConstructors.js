import { TASK_STATUSES } from './taskConstants'

const TASK_STATUSES_SEQUENCE = Object.keys(TASK_STATUSES)

/**
 * Task Status Class
 * @constructor
 * @param {string} ref - The ref of the task status.
 */
export class TaskStatus {
  constructor (ref) {
    if (!ref) {
      throw new ReferenceError('Expecting ref as argument.')
    }

    this.ref = ref
    this.label = this._getLabel()
  }

  /**
   * Returns the label for current status.
   * @private
   * @returns {string} label - The status label.
   */
  _getLabel () {
    return TASK_STATUSES[this.ref]
  }

  /**
   * Checks if status can be updated to the status informed.
   * @public
   * @param {string} nextStatusRef - The ref of the next task status.
   * @returns {boolean}
   */
  canProceedTo (nextStatusRef) {
    const currentStatusIndex = TASK_STATUSES_SEQUENCE
      .findIndex(statusRef => statusRef === this.ref)

    const nextStatusIndex = TASK_STATUSES_SEQUENCE
      .findIndex(statusRef => statusRef === nextStatusRef)

    return (currentStatusIndex < nextStatusIndex)
  }
}


/**
 * Task Class
 * @constructor
 * @param {string} id - The ID of the task.
 * @param {string} title - The title of the task.
 * @param {string} description - The description of the task.
 * @param {number} timestamp - The timestamp of the task.
 * @param {number} statusId - The status ref of the task.
 */
export class Task {
  constructor ({ id, title, description, timestamp, statusRef }) {
    this.id = id
    this.title = title
    this.description = description
    this.timestamp = timestamp
    this.status = new TaskStatus(statusRef)
  }
}
