const taskInput = document.getElementById("taskTitle");
const addTaskBtn = document.getElementById("addTaskBtn");

const todoList = document.getElementById("todoList");
const progressList = document.getElementById("progressList");
const doneList = document.getElementById("doneList");

function createTaskElement(taskText) {
  const li = document.createElement("li");

  const title = document.createElement("div");
  title.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const toProgressBtn = document.createElement("button");
  toProgressBtn.textContent = "Start";

  const toDoneBtn = document.createElement("button");
  toDoneBtn.textContent = "Done";

  actions.appendChild(toProgressBtn);
  actions.appendChild(toDoneBtn);

  li.appendChild(title);
  li.appendChild(actions);

  toProgressBtn.addEventListener("click", () => {
    progressList.appendChild(li);
  });

  toDoneBtn.addEventListener("click", () => {
    doneList.appendChild(li);
  });

  return li;
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const taskEl = createTaskElement(taskText);
  todoList.appendChild(taskEl);

  taskInput.value = "";
});
