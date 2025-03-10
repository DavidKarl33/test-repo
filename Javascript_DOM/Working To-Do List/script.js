form.addEventListener("submit", function (event) {
    
    event.preventDefault();   // no page refresh

    let taskText = input.value;
    if (taskText === "") return;  // if no input doesnt execute
    
    let taskItem = document.createElement("li");
    taskItem.className = "task";

    let taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
  
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
        list.removeChild(taskItem);
        }
    );

    taskItem.appendChild(taskSpan); 
    taskItem.appendChild(deleteBtn);
    list.appendChild(taskItem);
   
    }
);

