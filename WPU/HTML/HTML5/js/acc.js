const showAlert = text => alert(text);
const button1 = document.querySelector('#button1');
button1.addEventListener("keyup", (e) => {
  if(e.keyCode === 32 || e.keyCode === 13) { // spasi dan enter
    showAlert('ok');
  }
});