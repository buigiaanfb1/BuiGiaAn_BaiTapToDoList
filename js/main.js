var list = new taskList();
var validation = new Validation();

getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

getEle("addItem").addEventListener("click", function () {
  var isValid = true;
  var input = getEle("newTask").value;

  isValid &= validation.checkBlank(input, "notiInput", "(*) Can not be blank");

  if (!isValid) return;

  isValid &= validation.duplicated(
    input,
    "notiInput",
    "(*) Duplicated",
    list.arr
  );

  if (!isValid) return;
  var task = new Task(input);
  list.addTask(task);
  alert("Successfully added!");
  createTable(list.arr);
  setLocalStorage();
  input.value = "";
});

function deleteTask(id) {
  // var status = list.getInfoTask(id).status;
  list.deleteTask(id);
  createTable(list.arr);
  setLocalStorage();
}

function changeStatus(id) {
  // list.getInfoTask(id);
  var pos = list.findIndex(id);
  if (list.arr[pos].status.valueOf() == "todo") {
    list.arr[pos].status = "completed";
  } else list.arr[pos].status = "todo";
  createTable(list.arr);
  setLocalStorage();
}

function createTable(arr) {
  var todo = "";
  arr.forEach((item) => {
    if (item.status == "todo") {
      todo += `
      <li>
        <span>${item.taskName}</span>
        <div class="button">
          <button id="delete" onclick="deleteTask('${item.id}')"><i class="fa fa-trash-alt far"></i></button>
          <button id="change" onclick="changeStatus('${item.id}')"><i class="fa fa-check-circle fas"></i></button>
          </div>
      </li>
    `;
    }
  });
  getEle("todo").innerHTML = todo;

  var completed = "";
  arr.forEach((item) => {
    if (item.status == "completed") {
      completed += `
      <li>
        <span>${item.taskName}</span>
        <div class="button">
          <button id="delete" onclick="deleteTask('${item.id}')"><i class="fa fa-trash-alt far"></i></button>
          <button id="change" onclick="changeStatus('${item.id}')"><i class="fa fa-check-circle fas"></i></button>
          </div>
      </li>
    `;
    }
  });
  getEle("completed").innerHTML = completed;
}

function setLocalStorage() {
  var arr = JSON.stringify(list.arr);
  localStorage.setItem("TASK", arr);
}

/// get

function getLocalStorage() {
  if (localStorage.getItem("TASK")) {
    list.arr = JSON.parse(localStorage.getItem("TASK"));
    createTable(list.arr);
  }
}
