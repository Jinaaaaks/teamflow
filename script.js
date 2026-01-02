document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskTitle");
  const addTaskBtn = document.getElementById("addTaskBtn");

  const todoList = document.getElementById("todoList");
  const progressList = document.getElementById("progressList");
  const doneList = document.getElementById("doneList");

  const todoCount = document.getElementById("todoCount");
  const progressCount = document.getElementById("progressCount");
  const doneCount = document.getElementById("doneCount");

  function updateCounts() {
    todoCount.textContent = todoList.children.length;
    progressCount.textContent = progressList.children.length;
    doneCount.textContent = doneList.children.length;
  }

  // Quick safety checks. If any is null, IDs do not match.
  if (!taskInput || !addTaskBtn || !todoList || !progressList || !doneList) {
    console.error("Missing element. Check your HTML IDs:", {
      taskInput,
      addTaskBtn,
      todoList,
      progressList,
      doneList,
    });
    return;
  }

  function createTaskElement(taskText) {
    const li = document.createElement("li");

    const title = document.createElement("div");
    title.className = "task-title";
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
      updateCounts();
    });

    toDoneBtn.addEventListener("click", () => {
      doneList.appendChild(li);
      updateCounts();
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
    updateCounts

    taskInput.value = "";
    taskInput.focus();
  });
});
