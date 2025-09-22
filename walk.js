    function addItem() {
      let input = document.getElementById("todoInput");
      let task = input.value.trim();

      if (task === "") {
        alert("Please enter a task!");
        return;
      }

      let li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.textContent = task;

      li.onclick = function() {
        li.classList.toggle("completed");
      };

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "btn btn-danger btn-sm";
      deleteBtn.onclick = function(event) {
        event.stopPropagation(); 
        li.remove();
      };

      li.appendChild(deleteBtn);
      document.getElementById("todoList").appendChild(li);

      input.value = "";
    }

    // Allow Enter key to add task
    document.getElementById("todoInput").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        addItem();
      }
    });