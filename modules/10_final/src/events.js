import { sortList } from "./sort";
import { deleteAllTasks } from "./delete";
import { generateNewTask } from "./add";
import { searchByLists } from "./search";

export function setEvents() {

    const sortOpenList = document.getElementById('sort-open');
    sortOpenList.addEventListener('change', () => sortList('.open-list'));

    const sortDoneList = document.getElementById('sort-done');
    sortDoneList.addEventListener('change', () => sortList('.done-list'));

    const removeList = document.getElementsByClassName('clear-list');
    Array.from(removeList).forEach(list => list.addEventListener('click', deleteAllTasks));

    const newTaskInput = document.querySelector('.new-task-input');
    newTaskInput.addEventListener('keyup', generateNewTask);

    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', generateNewTask);

    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keyup', searchByLists);

}