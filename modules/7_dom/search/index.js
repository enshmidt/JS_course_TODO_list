function bold() {
  let inputText = document.getElementById('user_input').value;
  let copiedTexNode = document.getElementById('copied_text');
  copiedTexNode.innerHTML = copiedTexNode.textContent.replaceAll(inputText, `<b>${inputText}</b>`)
}

function copyText() {
  /*User should be able to put any text in \<textarea\>, then text will be immediately displayed in \<p\>*/
  let userText = document.getElementById('user_text').value;
  let pToCopy = document.getElementById('copied_text');
  pToCopy.textContent = userText;
}