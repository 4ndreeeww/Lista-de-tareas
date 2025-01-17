let IdCounter = 0;
const input = document.querySelector('textarea');

userInput.addEventListener("submit", (event)=>{
    event.preventDefault();
    addtTask();
});

let addtTask = ()=>{
    IdCounter++;

    let newValue = input.value;

    list.innerHTML += `
    <div class="task-container" id="${IdCounter} ">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="img/bote-de-basura.png" class="closeBtn">
    </div>`
    input.value = "";
    updateStats();
}

list.addEventListener("click", (event)=>{
    if(event.srcElement.nodeName == "INPUT") {
        updateStats();
    }else if(event.srcElement.nodeName == "IMG") {
        deleteTask(event.srcElement.parentNode.id);
    }
});

let updateStats = ()=>{
    let element = list.querySelectorAll("div");
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')

    stats.innerHTML = `<p>Tareas pendientes: ${element.length} completadas: ${checkbox.length}</p>`
};

let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}