"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const display = document.getElementById("display");
const taskList = document.getElementById("taskList");
let counter = 0;
function getTask() {
    if (display.value) {
        const value = display.value;
        display.value = '';
        return value;
    }
}
function createTask() {
    const task = getTask();
    if (task == undefined) {
        alert('type in box');
    }
    else {
        let newTask = document.createElement("div");
        let removeButton = document.createElement("button");
        let tickBox = document.createElement("input");
        tickBox.setAttribute('type', 'checkbox');
        tickBox.addEventListener('change', function () {
            if (this.checked) {
                newTask.style.textDecoration = 'line-through';
            }
            else
                newTask.style.textDecoration = 'none';
        });
        newTask.textContent = task;
        newTask.setAttribute('id', `${counter}`);
        removeButton.setAttribute('id', `${counter}`);
        removeButton.addEventListener('click', function (event) {
            if (event.target) {
                const elementId = event.target.id;
                const div = document.getElementById(elementId);
                if (div)
                    taskList.removeChild(div);
            }
        });
        taskList.appendChild(newTask);
        newTask.appendChild(tickBox);
        newTask.appendChild(removeButton);
        counter++;
    }
}
//# sourceMappingURL=main.js.map