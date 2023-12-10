const inputBox = document.getElementById("input-box");
const listNote = document.getElementById("list-note");

function addtask() {
  if (inputBox.value === "") {
    alert("It Has To Be Something TO-DO Today :(");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listNote.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listNote.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();

      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listNote.innerHTML);
}

function showList() {
  listNote.innerHTML = localStorage.getItem("data");
}

showList();
