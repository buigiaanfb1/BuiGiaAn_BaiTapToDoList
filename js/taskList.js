function taskList() {
  this.arr = [];

  this.findIndex = function (id) {
    return this.arr.findIndex((item) => {
      return id == item.id;
    });
  };

  this.addTask = function (id) {
    this.arr.push(id);
  };

  this.deleteTask = function (id) {
    var pos = this.findIndex(id);
    if (pos !== -1) this.arr.splice(pos, 1);
  };

  this.getInfoTask = function (id) {
    var pos = this.findIndex(id);
    return this.arr[pos];
  };

  this.updateTask = function () {
    console.log(this.getInfoTask);
  };
}
