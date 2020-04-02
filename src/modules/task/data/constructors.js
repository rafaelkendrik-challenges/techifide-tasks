export class Task {
  id
  title
  status
  description
  timestamp

  constructor ({ id, title, status, description, timestamp }) {
    this.id = id
    this.title = title
    this.status = status
    this.description = description
    this.timestamp = timestamp
  }
}
