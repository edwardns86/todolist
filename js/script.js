const appState = {
    currentUser: 'Anonymous',
    toDos: [
        {
            body: 'First Task Example',
            isDone: true, // could make done || doing || deleted add later 
            createdAt: new Date()
        },
        {
            body: 'Second Task Example',
            isDone: true,
            createdAt: new Date()
        }
    ]
}


function addToDo() { //Working 
    const newTask = {
        body: document.getElementById('thingToDo').value,
        isDone: false,
        createdAt: new Date(),
    }
    appState.toDos.push(newTask);
    renderToDoList()
}

function renderToDoList(status) {
    let tasks
    if (status == 'done') {
        tasks = appState.toDos.filter(task => task.isDone)
    } else if (status == 'todo') {
        tasks = appState.toDos.filter(task => !task.isDone)
    } else {
        tasks = appState.toDos
    }

    const tasksHTML = tasks.map((task, idx) => {
        return `
        <li
        >${task.body} ${task.isDone} <button class"btn btn-success"  onclick="toggleIsDone(${idx})"> Complete </button>
        <button class"btn btn-success" onclick="deleteTask(${idx})" >x </button> 
        </li>
        `
    })
    document.getElementById('taskList').innerHTML = tasksHTML.join('');
    console.log("first line", appState);
}

const deleteTask = (idx => {
    appState.toDos.splice(idx, 1);
    renderToDoList();
})

const toggleIsDone = (idx => {
    appState.toDos[idx].isDone = !(appState.toDos[idx].isDone);  // changes true and false 
    renderToDoList();
})

renderToDoList()


