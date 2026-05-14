const button = document.querySelector('#add-task')
const formulario = document.querySelector('#formulario')
const input = document.querySelector('#task')
const list = document.querySelector('#task-list')
const search = document.querySelector('#search')
var taskIndex = 1
var text

input.addEventListener("input", (e) => {
    text = e.target.value
})

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList
            .toggle('crossed-out')
    }
})


search.addEventListener("input", (e) => {
    var query = e.target.value.toLowerCase()
    const allItems = document.querySelectorAll("li")
    console.log(allItems)
    allItems.forEach(element => {
        console.log(element.innerText.toLowerCase())
        console.log(element.innerText.toLowerCase().includes(query), query)
        if (element.innerText.toLowerCase().includes(query)) {
            element.classList.remove('hidden')
            // element.classList.toggle('hidden')        
        }
        else {
            element.classList.add('hidden')
        }
    });
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if (text != undefined) {

        console.log("click happened", e);
        const task = document.createElement('li')
        const index = taskIndex
        task.id = `tarefinha_${index}`
        task.className = "tarefinha"
        task.innerHTML = `     
        <p id="task_num_${index}">${text}</p>
        <button id="delete_num_${index}"> X </button>
        <br>     
        `;
        list.appendChild(task)
        const delButton = document.querySelector(`#delete_num_${index}`)
        if (delButton != null) {
            console.log("del button created");

            delButton.addEventListener("click", (e) => {
                e.preventDefault()
                console.log("trying to delete something");
                document.querySelector(`#tarefinha_${index}`).remove()
            })
        }
        taskIndex++
    }
})
