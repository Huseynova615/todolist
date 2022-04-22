let addbtn = document.getElementById("add-btn");
let ullist = document.getElementById("todo-list"); //ul
let input = document.getElementById("inputText");
let search = document.getElementById("search");
let icon = document.getElementById("sort-btn"); // icon blackdown
let asc = document.querySelector(".asc");
let desc = document.querySelector(".desc");

addbtn.addEventListener("click", function () {
  let list = document.createElement("li");
  list.classList.add("list-styling");
  ullist.appendChild(list);
  let li_input = document.createElement("input");
  li_input.classList.add("li_inputclass");
  li_input.value = input.value;
  list.appendChild(li_input);
  input.value = "";

  let xIcon = document.createElement("span");
  list.append(xIcon);
  xIcon.innerHTML = "x";
  xIcon.classList.add("xIcon-styling");

  xIcon.addEventListener("click", function () {
    ullist.removeChild(list);
    if (ullist.children.length == 0) {
      ullist.classList.add("hidden");
    }
  });

  ullist.classList.remove("hidden");
});

input.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    let list = document.createElement("li");
    list.classList.add("list-styling");
    ullist.appendChild(list);
    let li_input = document.createElement("input");
    li_input.classList.add("li_inputclass");
    li_input.value = input.value;
    list.appendChild(li_input);

    input.value = "";

    let xIcon = document.createElement("span");
    list.append(xIcon);
    xIcon.innerHTML = "x";
    xIcon.classList.add("xIcon-styling");

    xIcon.addEventListener("click", function () {
      ullist.removeChild(list);
      if (ullist.children.length == 0) {
        ullist.classList.add("hidden");
      }
    });
    ullist.classList.remove("hidden");
  }
});

const dragDrop = document.querySelector(".todo-list-parent");
new Sortable(dragDrop, {
  animation: 350,
});

search.addEventListener("keyup", function () {
  let arr = [...ullist.children];

  arr.forEach((item) => {
    if (
      !item.firstChild.value
        .toLowerCase()
        .trim()
        .includes(this.value.toLowerCase().trim())
    ) {
      item.classList.add("hidden");
    } else if (
      item.firstChild.value
        .toLowerCase()
        .trim()
        .includes(this.value.toLowerCase().trim())
    ) {
      item.classList.remove("hidden");
    }
  });
});

asc.addEventListener("click", function () {
  var i, switching, shouldSwitch, list, listitems;
  list = document.getElementById("todo-list");
  // ul= ullist
  switching = true;

  while (switching) {
    switching = false;
    listitems = list.getElementsByTagName("input");
    // li= list

    for (i = 0; i < listitems.length - 1; i++) {
      shouldSwitch = false;
      if (listitems[i].value > listitems[i + 1].value) {
        shouldSwitch = true;
        break;
      }
    }
    if (listitems[i + 1] != undefined) {
      listitems[i].parentNode.parentNode.insertBefore(
        listitems[i + 1].parentNode,
        listitems[i].parentNode
      );
      switching = true;
    }
  }
  asc.classList.add("hidden");
  desc.classList.remove("hidden");
});

desc.addEventListener("click", function () {
  var i, switching, shouldSwitch, list, listitems;
  list = document.getElementById("todo-list");
  // ul= ullist
  switching = true;

  while (switching) {
    switching = false;
    listitems = list.getElementsByTagName("input");
    // li= list

    for (i = 0; i < listitems.length - 1; i++) {
      shouldSwitch = false;
      if (listitems[i].value < listitems[i + 1].value) {
        shouldSwitch = true;
        break;
      }
    }
    if (listitems[i + 1] != undefined) {
      listitems[i].parentNode.parentNode.insertBefore(
        listitems[i + 1].parentNode,
        listitems[i].parentNode
      );
      switching = true;
    }
  }
  asc.classList.remove("hidden");
  desc.classList.add("hidden");
});
