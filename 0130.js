function butotnClick() {
    confirm('送信します。よろしいですか？');
  }
  let button = document.getElementById('mybtn');
  button.addEventListener('click', butotnClick);