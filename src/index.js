document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
  let input = document.getElementById("new-task-description");
  let tasklist = document.getElementById("tasks")
  
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(input.textContent !== "") {
      let task = document.createElement("LI");
      task.innerHtml = input.textContent;
      taskList.appendChild(task);
    }
  });
});
