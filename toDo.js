var todos = ["Buy New Turtle"];

function listTodos() {
    console.log("***********");
    todos.forEach(function(todo , i) {
        console.log(i + ": " + todo);
    });
    console.log("***********");
}

function newTodo() {
    let newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted item at index of " + index);
}


var input = prompt("What would you like to do?");

while(input !== "quit") {

if(input === "list") {
    listTodos();
}
else if(input === "new") {
    newTodo();
}
else if(input === "delete"){
    deleteTodo();
}

var input = prompt("What would you like to do?");
}
console.log("okay you quit the app");
