const display = document.getElementById("display") as HTMLInputElement
const taskList = document.getElementById("taskList") as HTMLInputElement


let counter: number = 0

function getTask(): string | undefined{
    if (display.value) {
        const value = display.value
        display.value = ''
        return value
    } 
}

function createTask() {
    const task = getTask()
    if (task == undefined) {
        alert('type in box')
    } else {
        let newTask = document.createElement("div");
        let removeButton = document.createElement("button")
        newTask.textContent = task
        newTask.setAttribute('id', `${counter}`)
        removeButton.setAttribute('id', `${counter}`)
        removeButton.addEventListener('click', function(event) {
        if (event.target) {
        const elementId = (event.target as HTMLElement).id
        const div = document.getElementById(elementId)
        if (div) 
        taskList.removeChild(div)
    }
        })
        taskList.appendChild(newTask)
        newTask.appendChild(removeButton)
        counter++
    }   
}