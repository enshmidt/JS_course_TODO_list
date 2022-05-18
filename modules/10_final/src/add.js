import { generateEmptyError, manageNoItemMsg } from "./handle";
import { buildNewTaskContainer } from "./taskBuilder";
import { sortList } from "./sort";
import { jsonObj } from "./localStorage";

export function generateNewTask(event) {
    if (event.key === 'Enter' || event.target.tagName == 'BUTTON') {
        const newTaskInput = document.querySelector('.new-task-input');
        if (newTaskInput.value.trim() != '') {
            const newOpenTask = buildNewTaskContainer();
            //set name
            const newTaskP = newOpenTask.querySelector('.inner-task-name');
            newTaskP.textContent = newTaskInput.value;
            //set attributes
            newOpenTask.classList.add('open-task');
            newOpenTask.querySelector('input[type="checkbox"]').value = 'in-progress';
            const currTimestamp = Date.now();
            const currTime = new Date(currTimestamp);
            newOpenTask.querySelector('.inner-start-time').textContent = currTime.toLocaleTimeString();
            newOpenTask.querySelector('.inner-start-time').setAttribute('timestamp', currTimestamp);
            newOpenTask.querySelector('.inner-due-time').textContent = '';
            newOpenTask.querySelector('.inner-due-time').hidden = true;

            newTaskInput.value = null;
            document.querySelector('.open-list').appendChild(newOpenTask);
            manageNoItemMsg();
            sortList('.open-list');

            const timestamp = newOpenTask.querySelector('.inner-start-time').getAttribute('timestamp');
            localStorage.setItem(timestamp, jsonObj(newOpenTask));
        } else {
            generateEmptyError();
        }
    }
}