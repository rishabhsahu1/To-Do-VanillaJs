function myfunction() {
  if (document.getElementById("text").value.length == 0) {
    alert("Please Enter The Input");
    return;
  }
  input = document.getElementById("text").value;
  document.getElementById("text").value = "";
  var listItem = document.createElement("li");
  //checkbox
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listItem.appendChild(checkbox);
  checkbox.addEventListener("click", function (event) {
    if (checkbox.checked == true) {
      listItem.style.textDecoration = "line-through";
      listItem.style.color = red;
    } else {
      listItem.style.textDecoration = "none";
    }
  });

  let textnode = document.createTextNode(input);
  listItem.appendChild(textnode);
  var list = document.getElementById("list");
  list.appendChild(listItem);
  //button
  var button = document.createElement("button");
  button.innerHTML = "Delete";
  listItem.appendChild(button);
  button.classList.add("delete-button");

  button.addEventListener("click", function () {
    var test = this.parentNode;
    var remove = document.getElementById("list");
    remove.removeChild(test);
  });
}

function active() {
  var list = document.getElementById("list");
  var listItems = list.getElementsByTagName("LI");
  for (var i = 0; i <= listItems.length - 1; i++) {
    var item = listItems[i].children;
    for (var j = 0; j <= item.length - 1; j++) {
      if (item[j].nodeName === "INPUT") {
        if (item[j].checked === true) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "block";
        }
      }
    }
  }
}

function completed() {
  var list = document.getElementById("list");
  var listItems = list.getElementsByTagName("LI");
  for (var i = 0; i <= listItems.length - 1; i++) {
    var item = listItems[i].children;
    for (var j = 0; j <= item.length - 1; j++) {
      if (item[j].nodeName === "INPUT") {
        if (item[j].checked === false) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "block";
        }
      }
    }
  }
}

function alltask() {
  var list = document.getElementById("list");
  var listItems = list.getElementsByTagName("LI");
  for (var i = 0; i <= listItems.length - 1; i++) {
    listItems[i].style.display = "block";
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    myfunction();
  }
});
