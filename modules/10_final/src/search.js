import { manageNoItemMsg } from "./handle";

export function searchByLists(event) {
    const searchInput = document.querySelector('.search-input');
    const searchCondition = searchInput.value;
    const openList = document.querySelector('.open-list');
    const doneList = document.querySelector('.done-list');
    if (event.key === 'Backspace') {
        Array.from(openList.children).concat(Array.from(doneList.children)).forEach(task => {
            task.classList.remove('hidden-task');
        });
        manageNoItemMsg();
    }
    Array.from(openList.children).concat(Array.from(doneList.children)).forEach(task => {
        if (!task.querySelector('.inner-task-name').textContent.toLocaleLowerCase().includes(searchCondition.toLocaleLowerCase())) {
            task.classList.add('hidden-task');
        }
    });
    manageNoItemMsg();
}