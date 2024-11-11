   
      window.onload = function() {
        renderTodos();
    }
 
    function addTodo() {
        const todoInput = document.getElementById("todoInput");
        const todoText = todoInput.value.trim();
        if (todoText) {
            const todos = getTodos();
            todos.push(todoText);
            saveTodos(todos);
            renderTodos();
            todoInput.value = '';
        }
    }

    function saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    function getTodos() {
        const todos = localStorage.getItem("todos");
        return todos ? JSON.parse(todos) : [];
    }

    function renderTodos() {
        const todoList = document.getElementById("todoList");
        todoList.innerHTML = "";
        const todos = getTodos();
        todos.forEach(todo => {
            const li = document.createElement("li");
            li.textContent = todo;
            todoList.appendChild(li);
        });
    }