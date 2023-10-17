const taskInput = document.getElementById("task");
const categoryInput = document.getElementById("category");
const addButton = document.getElementById("add");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const taskCategory = categoryInput.value;

    if (taskText !== "") {
        const taskItem = createTaskItem(taskText, taskCategory);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

function createTaskItem(taskText, taskCategory) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText + " (Category: " + taskCategory + ")";
    return taskItem;
}
