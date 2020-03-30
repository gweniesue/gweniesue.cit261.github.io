import { ToDo } from './toDo.js';

let toDos = [];

if (localStorage.getItem("toDos")) {
    toDos = JSON.parse(localStorage.getItem("toDos"));
    loadToDoItem();
}

document.querySelector('#addButton').addEventListener('click', addToDoList);

console.log(toDos);


window.completed = completed;
window.loadToDoItem = loadToDoItem;
window.uncompleted = uncompleted;

function addToDoList() {
    const newToDo = new ToDo(
        event.timeStamp,
        document.getElementById('toDoItem').value,
        false
    );
    toDos.push(newToDo);
    saveToDoItem(toDos);
    loadToDoItem();
    document.getElementById("toDoItem").value = "";
}

function loadToDoItem(itemID) {
    clearToDoItem();
    for (let i = 0; i < toDos.length; i++) {
        document.querySelector('.toDoList').innerHTML +=
            `
        <li class="item" id="${toDos[i].id}">
            <input id="${toDos[i].id}" type="checkbox" class="check"/>
            <label for="${toDos[i].id}"></label>
            <span>${toDos[i].content}</span>
            <button class="deletedItem">Delete</button>
        </li>   
        `;
        let item = document.getElementById(toDos[i].id);
        if (toDos[i].completed === true) {
            item.classList.add('done');
        }
    }
}

function clearToDoItem() {
    var list = document.getElementsByClassName('item');
    while (list.length > 0) {
        list[0].remove();
    }
}

function saveToDoItem() {
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

const list = document.querySelector('.toDoList');
list.addEventListener('click', event => {
    if (event.target.classList.contains('check')) {
        const itemID = event.target.parentElement.id;
        crossItemOff(itemID);
    }
    if (event.target.classList.contains('deleteItem')) {
        const itemID = event.target.parentElement.id;
        deleteTodoItem(itemID);
    }
});

function crossItemOff(itemID) {
    let item = document.getElementById(itemID);
    for (let i = 0; i < toDos.length; i++) {
        if (itemID == toDos[i].id) {
            toDos[i].completed = true;
            item.classList.add('done');
        }
    }
}

function deleteTodoItem(itemID) {
    let item = document.getElementById(itemID);
    for (let i = 0; i < toDos.length; i++) {
        if (itemID == toDos[i].id) {
            //Remove item from array
            toDos.splice(i, 1);
            //Remove item from html
            item.remove();
        }
    }
    saveToDoItem(toDos);
}

function completed() {
    clearToDoItem();
    //Load list of completed items
    for (let i = 0; i <= toDos.length; i++) {
        let checkToDo = toDos[i].completed;
        if (checkToDo === true) {
            document.querySelector('.toDoList').innerHTML +=
                `
                <li class="item done" id="${toDos[i].id}">
                    <input id="${toDos[i].id}" type="checkbox" class="check"/>
                    <label for="${toDos[i].id}"></label>
                    <span>${toDos[i].content}</span>
                    <button class="deleteItem">Delete</button>
                </li>   
                `;
        }
    }
}

function uncompleted() {
    clearToDoItem();
    for (let i = 0; i <= toDos.length; i++) {
        console.log(toDos[i].completed);
        if (toDos[i].completed === false) {
            document.querySelector('.toDoList').innerHTML +=
                `
            <li class="item" id="${toDos[i].id}">
                <input id="${toDos[i].id}" type="checkbox" class="check"/>
                <label for="${toDos[i].id}"></label>
                <span>${toDos[i].content}</span>
                <button class="deleteItem">Delete</button>
            </li>   
            `;
        }
    }
}


