let form = document.querySelector("form");
let taskInput = document.getElementById("newTask");
let tasks = document.getElementById("taskAdd");

form.addEventListener("submit", event => {
    event.preventDefault();
    let taskValue = taskInput.value;
    if (taskValue === '') return;

    console.log("submitted");

    //!task element
    let taskEle = document.createElement("div");
    taskEle.classList.add("task");

    //!inputval elements
    let inputValEle = document.createElement("div");
    inputValEle.classList.add("inputVal");
    let inp = document.createElement("input");
    inp.classList.add("newVal");
    inp.setAttribute("type", "text");
    inp.setAttribute("readonly", "readonly");
    inp.value = taskValue;

    //!actions element
    let actionEle = document.createElement("div");
    actionEle.classList.add("actions");
    let edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerText = "Edit";

    const deleteEle = document.createElement("button");
    deleteEle.classList.add("delete");
    deleteEle.innerText = "Delete";

    inputValEle.appendChild(inp);
    actionEle.appendChild(edit);
    actionEle.appendChild(deleteEle);

    taskEle.appendChild(inputValEle);
    taskEle.appendChild(actionEle);
    tasks.appendChild(taskEle);

    //! Clear the input bar after adding task
    taskInput.value = "";

    //! Edit a todo
    edit.addEventListener("click", e => {
        if (e.target.innerText == "Edit") {
            inp.removeAttribute("readonly");
            inp.focus();
            edit.innerText = "Save";
        } else {
            inp.setAttribute("readonly", "readonly");
            edit.innerText = "Edit";
        }
    });

    //! Delete element
    deleteEle.addEventListener("click", e => {
        tasks.removeChild(taskEle);
    });
});
