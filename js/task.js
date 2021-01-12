function Task(taskName) {
  this.id = Math.floor(Math.random() * 101);
  this.taskName = taskName;
  this.status = "todo";
}
