const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY ="todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !=parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);



const savetoDos = localStorage.getItem(TODOS_KEY);


if(savetoDos !== null){
    const parseToDos =JSON.parse(savetoDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}

function sexyFilter(){

}
