// console.log('Hello World!');

const keyword = document.querySelector('#keyword');
const tombolCari = document.querySelector('#tombol-cari');
const container = document.querySelector('#container');

keyword.addEventListener('keyup', function() {
  // console.log('ok');
  // console.log(keyword.value);

  // Ajax
  // XMLHttpRequest

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      container.innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', 'ajax/mahasiswa.php?keyword=' + keyword.value, true);
  xhr.send();

  // Fetch
  // fetch('ajax/mahasiswa.php?keyword=' + keyword.value)
  //   .then((response) => response.text())
  //   .then((response) => (container.innerHTML = response));
});