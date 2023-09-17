let todoArray = [];

updateToDoList();

function addTodo(){
    let nameInputELem = document.querySelector('.name-input');
    let name = nameInputELem.value;
    let dateInputELem =  document.querySelector('.due-date');
    let dueDate = dateInputELem.value;

    todoArray.push({name:name, 
    dueDate:dueDate});
    // console.log(todoArray);
    nameInputELem.value = '';
    dateInputELem.value = '';

    updateToDoList();
}

// function removeTodo(){
//     let todoElem = document.querySelector('.todo-items');
//     let name = todoElem.value;
//     todoArray.pop(name);
//     // console.log(todoArray);
//     todoElem.value = '';

//     updateToDoList();
// }

function updateToDoList(){

    let todoList = '';

    for (let i = 0 ; i < todoArray.length ; i++){
        const todoElem =  todoArray[i];
        const { name, dueDate } = todoElem;

        const todo = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            // removeTodo();
            todoArray.splice(${i}, 1);
            updateToDoList();
            " class="delete-todo-button" >Delete</button>`;

        todoList += todo;
    }

    document.querySelector('.todo-list').innerHTML = todoList;
}
