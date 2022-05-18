import { showDelBtn, hideDelBtn, deleteTask } from "./delete";
import { changeTaskStatus, editTaskName } from "./edit";

export function buildNewTaskContainer() {
    //container
    const task = document.createElement('div');
    task.classList.add('existing-task');
    task.onmouseover = showDelBtn;
    task.onmouseleave = hideDelBtn;
    //checkbox
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'checkbox-container';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = changeTaskStatus;
    //task name
    const taskNameP = document.createElement('p');
    taskNameP.className = 'inner-task-name';
    taskNameP.ondblclick = editTaskName;
    //time
    const timeDiv = document.createElement('div');
    timeDiv.className = 'task-time-block';
    const startTimeDiv = document.createElement('div');
    startTimeDiv.className = 'inner-start-time';
    const dueTimeDiv = document.createElement('div');
    dueTimeDiv.className = 'inner-due-time';
    //delete button
    const btnDiv = document.createElement('div');
    btnDiv.className = 'del-item-base';
    const delItemBtn = document.createElement('button');
    delItemBtn.className = 'del-item-btn';
    delItemBtn.hidden = true;
    delItemBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    delItemBtn.onclick = deleteTask;
    
    checkboxDiv.appendChild(checkbox);
    task.appendChild(checkboxDiv);
    task.appendChild(taskNameP);
    timeDiv.appendChild(startTimeDiv);
    timeDiv.appendChild(dueTimeDiv);
    task.appendChild(timeDiv);
    btnDiv.appendChild(delItemBtn);
    task.appendChild(btnDiv);

    return task;
}