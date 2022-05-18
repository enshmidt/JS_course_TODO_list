import { jsonObj } from "./localStorage";
import { manageNoItemMsg } from "./handle";
import { sortList } from "./sort";

export function editTaskName(event) {
    const target = event.target;
    const itemKey = event.target.closest('.existing-task').querySelector('.inner-start-time').getAttribute('timestamp');
    const originText = target.innerText;
    const input = document.createElement('input');
    if (target.tagName == 'P') {
        input.focus();
        input.value = originText;
        target.innerText = '';
        target.appendChild(input);
    }

    input.onkeydown = (button) => {
        if (button.key === 'Enter') {
            target.innerText = input.value;
            input.remove();
            localStorage.setItem(itemKey, jsonObj(event.target.closest('.existing-task')));
        } else if (button.key === 'Escape') {
            input.remove();
            target.innerText = originText;
        }
    };
    input.focus();
}

export function changeTaskStatus(event) {
    if (event.target.tagName === 'INPUT') {
        const openList = document.querySelector('.open-list');
        const doneList = document.querySelector('.done-list');
        const parent = event.target.closest('.existing-task');
        const box = parent.querySelector('input[type="checkbox"]');
        if (box.checked) {
            updateTaskAttributes(parent, false);
            doneList.appendChild(parent);
            localStorage.setItem(parent.querySelector('.inner-start-time').getAttribute('timestamp'), jsonObj(parent));
            manageNoItemMsg();
            sortList('.done-list');
        } else {
            updateTaskAttributes(parent, true);
            openList.appendChild(parent);
            localStorage.setItem(parent.querySelector('.inner-start-time').getAttribute('timestamp'), jsonObj(parent));
            manageNoItemMsg();
            sortList('.open-list');
        }
    }
}

function updateTaskAttributes(task, isOpen = true) {
    if (isOpen) {
        task.classList.add('open-task');
        task.classList.remove('done-task');
        task.querySelector('input[type="checkbox"]').value = 'in-progress';
        task.querySelector('.inner-due-time').textContent = '';
        task.querySelector('.inner-due-time').hidden = true;
    } else if (!isOpen) {
        task.classList.add('done-task');
        task.classList.remove('open-task');
        task.querySelector('input[type="checkbox"]').value = 'completed';
        const currTimestamp = Date.now();
        const currTime = new Date(currTimestamp);
        task.querySelector('.inner-due-time').textContent = currTime.toLocaleTimeString();
        task.querySelector('.inner-due-time').setAttribute('timestamp', currTimestamp);
        task.querySelector('.inner-due-time').hidden = false;
    }
}