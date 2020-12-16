(function () {
  var list = document.querySelector("#list"),
    form = document.querySelector("form"),
    item = document.querySelector("#item");

  form.addEventListener(
    "submit",
    function (s) {
      s.preventDefault();
      list.innerHTML += "<li>" + item.value + "</li>";
      store();
      item.value = "";
    },
    false
  );

  list.addEventListener(
    "click",
    function (c) {
      var t = c.target;
      if (t.classList.contains("checked")) {
        t.parentNode.removeChild(t);
      } else {
        t.classList.add("checked");
      }
      store();
    },
    false
  );

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    if (!storedValues) {
      list.innerHTML =
        "<li>Make a to do list</li>" +
        "<li>learn node js</li>" +
        "<li>learn mongoDB</li>" +
        "<li>learn express</li>";
    } else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})()