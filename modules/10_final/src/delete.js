import { manageNoItemMsg } from "./handle";

export function deleteAllTasks(event) {
    if (event.target.className === 'clear-list') {
        const taskContainer = event.target.closest('.tasks-container');
        let tasksTimestampsElements = [];
        tasksTimestampsElements = taskContainer.querySelectorAll('.inner-start-time');
        for (let i = 0; i < tasksTimestampsElements.length; i++) {
            localStorage.removeItem(tasksTimestampsElements[i].getAttribute('timestamp'));
        }
        taskContainer.querySelector('.task-list').innerHTML = [];
    }
    manageNoItemMsg();
}
export function deleteTask(event) {
    const parent = event.target.closest('.existing-task');
    localStorage.removeItem(parent.querySelector('.inner-start-time').getAttribute('timestamp'));
    parent.remove();
    manageNoItemMsg();
}

export function showDelBtn(event) {
    event.target.closest('.existing-task').querySelector('button').hidden = false;
}

export function hideDelBtn(event) {
    event.target.querySelector('button').hidden = true;
}