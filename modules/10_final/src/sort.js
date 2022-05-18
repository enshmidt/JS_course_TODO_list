const nameAsc = 'rec-a';
const nameDesc = 'rec-d';
const creationAsc = 'cr-a';
const creationDesc = 'cr-d';
const dueAsc = 'due-a';
const dueDesc = 'due-d';

export function sortList(listClassSelector) {
    const relatedTasksContainer = document.querySelector(listClassSelector).closest('.tasks-container');
    const taskBlock = relatedTasksContainer.querySelector('.task-list');
    const select = relatedTasksContainer.querySelector('select');
    const selectedInd = select.options.selectedIndex;
    const sortOption = select.options[selectedInd].value;
    const taskList = Array.from(taskBlock.children);
    if (taskList.length > 1) {
        let sortedListElements = [];
        if (sortOption === nameAsc || sortOption === nameDesc) sortedListElements = sortByText(taskList, sortOption);
        if (sortOption === creationAsc || sortOption === creationDesc) sortedListElements = sortByDateCreation(taskList, sortOption);
        if (sortOption === dueAsc || sortOption === dueDesc) sortedListElements = sortByDueDate(taskList, sortOption);
        taskBlock.innerHTML = [];
        sortedListElements.forEach(el => taskBlock.appendChild(el));
    }
}

function sortByText(taskList, order) {
    let sortedListElements = [];
    sortedListElements = taskList.sort((a, b) => {
        if (a.querySelector('p').textContent < b.querySelector('p').textContent) return -1;
        if (a.querySelector('p').textContent > b.querySelector('p').textContent) return 1;
        return 0;
    });
    if (order === nameAsc) return sortedListElements;
    else return sortedListElements = sortedListElements.reverse();
}

function sortByDateCreation(taskList, order) {
    let sortedListElements = [];
    sortedListElements = taskList.sort((a, b) => {
        if (new Date(+a.querySelector('.inner-start-time').getAttribute('timestamp')) < new Date(+b.querySelector('.inner-start-time').getAttribute('timestamp'))) return -1;
        if (new Date(+a.querySelector('.inner-start-time').getAttribute('timestamp')) > new Date(+b.querySelector('.inner-start-time').getAttribute('timestamp'))) return 1;
        return 0;
    });
    if (order === creationAsc) return sortedListElements;
    else return sortedListElements = sortedListElements.reverse();
}

function sortByDueDate(taskList, order) {
    let sortedListElements = [];
    sortedListElements = taskList.sort((a, b) => {
        if (new Date(+a.querySelector('.inner-due-time').getAttribute('timestamp')) < new Date(+b.querySelector('.inner-due-time').getAttribute('timestamp'))) return -1;
        if (new Date(+a.querySelector('.inner-due-time').getAttribute('timestamp')) > new Date(+b.querySelector('.inner-due-time').getAttribute('timestamp'))) return 1;
        return 0;
    });
    if (order === dueAsc) return sortedListElements;
    else return sortedListElements = sortedListElements.reverse();
}