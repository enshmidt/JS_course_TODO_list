export function manageNoItemMsg() {
    const openTasksList = document.getElementsByClassName('open-task');
    const hiddenOpenTask = document.getElementsByClassName('open-task hidden-task');
    const doneTasksList = document.getElementsByClassName('done-task');
    const hiddenDoneTask = document.getElementsByClassName('done-task hidden-task');
    const msgOpenList = document.querySelector('.open-tasks-container .no-item');
    const msgDoneList = document.querySelector('.done-tasks-container .no-item');
    msgOpenList.hidden = (openTasksList.length > 0 && openTasksList.length > hiddenOpenTask.length);
    msgDoneList.hidden = (doneTasksList.length > 0 && doneTasksList.length > hiddenDoneTask.length);

}

export function generateEmptyError() {
    const infoBackgrd = document.createElement('div');
    infoBackgrd.className = 'info-backgrd';
    const innerBlock = document.createElement('div');
    innerBlock.className = 'info-block';
    const warnTextBlock = document.createElement('p');
    warnTextBlock.className = 'warn-msg';
    warnTextBlock.innerText = 'Empty task name!';
    const closeMsgBtn = document.createElement('button');
    closeMsgBtn.title = 'click to close';
    closeMsgBtn.className = 'close-msg-btn';
    closeMsgBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

    innerBlock.appendChild(closeMsgBtn);
    innerBlock.appendChild(warnTextBlock);
    infoBackgrd.appendChild(innerBlock);
    document.querySelector('body').appendChild(infoBackgrd);

    closeMsgBtn.onclick = () => infoBackgrd.remove();
}