function setDelListener(event) {
  const tbody = document.getElementById('tbody');
  const tr = event.target.closest('tr');
  tbody.removeChild(tr);
}

function addRow() {
  let newRow = document.createElement('tr');
  let tbody = document.getElementById('tbody');
  tbody.appendChild(newRow);
  for (let colCount = 0; colCount < 3; colCount++) {
    let newCell = document.createElement('td');
    newRow.appendChild(newCell);
  }
  tbody.ondblclick = addCellInput;
  createdDelBtn(newRow.getElementsByTagName('td')[2]);
}

function addCellInput(event) {
  let target = event.target;
  let input = document.createElement('input');
  if (target.tagName == 'TD') {
    input.placeholder = 'Enter text';
    input.value = target.textContent;
  }

  input.onkeydown = (button) => {
    if (button.key === 'Enter') {
      target.textContent = input.value;
      input.remove();
    }
  }
  target.textContent = '';
  target.appendChild(input);
  input.focus();
}

function createdDelBtn(cell) {
  cell.id = 'remove_cell';
  let delBtn = document.createElement('button');
  cell.appendChild(delBtn);
  delBtn.className = 'btn i';
  delBtn.onclick = setDelListener;
  delBtn.innerHTML = '<i class="fa fa-trash"></i>'
  return delBtn;
}
