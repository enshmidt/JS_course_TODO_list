import { buildNewTaskContainer } from "./taskBuilder";
import { sortList } from "./sort";
import { manageNoItemMsg } from "./handle";

export function uploadFromStorage() {
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const taskObjKey = JSON.parse(localStorage.key(i));
            const taskObj = JSON.parse(localStorage.getItem(taskObjKey));
            const restoredTask = buildNewTaskContainer(true);
            restoredTask.querySelector('input[type="checkbox"]').value = taskObj.status;
            restoredTask.querySelector('input[type="checkbox"]').checked = taskObj.checkboxState;
            restoredTask.querySelector('.inner-task-name').innerText = taskObj.taskName;
            restoredTask.querySelector('.inner-start-time').textContent = taskObj.creationDate;
            restoredTask.querySelector('.inner-start-time').setAttribute('timestamp', taskObj.creationTimestamp);
            restoredTask.querySelector('.inner-due-time').textContent = taskObj.dueTime;
            restoredTask.querySelector('.inner-due-time').setAttribute('timestamp', taskObj.dueTimestamp);
            if (taskObj.status === 'in-progress') {
                document.querySelector('.open-list').appendChild(restoredTask);
                restoredTask.classList.add('open-task');
                sortList('.open-list');
            }
            else if (taskObj.status === 'completed') {
                document.querySelector('.done-list').appendChild(restoredTask);
                restoredTask.classList.add('done-task');
                sortList('.done-list');
            }
            manageNoItemMsg();
        }
    } catch (e) {
        return false;
    }
}

export function jsonObj(task) {
    const taskJsonObj = {
        taskName: task.querySelector('.inner-task-name').innerText,
        status: task.querySelector('input').value,
        checkboxState: task.querySelector('input[type="checkbox"]').checked,
        creationDate: task.querySelector('.inner-start-time').textContent,
        creationTimestamp: task.querySelector('.inner-start-time').getAttribute('timestamp'),
        dueTime: task.querySelector('.inner-due-time') === undefined ? null : task.querySelector('.inner-due-time').textContent,
        dueTimestamp: task.querySelector('.inner-due-time') === undefined ? null : task.querySelector('.inner-due-time').getAttribute('timestamp'),
    };
    return JSON.stringify(taskJsonObj);
}