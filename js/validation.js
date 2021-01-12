function Validation() {
  this.checkBlank = function (input, spanId, mess) {
    if (input !== "") {
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = mess;
    return false;
  };

  this.duplicated = function (input, spanId, mess, arr) {
    var check = true;
    arr.forEach((item) => {
      if (input === item.taskName) {
        check = false;
      }
    });
    if (check) {
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = mess;
    return false;
  };
}
