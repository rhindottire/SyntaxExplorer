// Using JQuery
$.ajax({
  url: "http://www.omdbapi.com/?apikey=dca61cc&s=avengers",
  success: movies => console.log(movies)
});

// Using JS Vanilla
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
  } else {
    console.error(xhr.responseText);
  }
}
xhr.open("GET", "http://www.omdbapi.com/?apikey=dca61cc&s=avengers");
xhr.send();

// Using Fetch
fetch("http://www.omdbapi.com/?apikey=dca61cc&s=avengers")
  .then(response => response.json())
  .then(response => console.log(response)); // return Promise

// Promise
// object yang mempresentasikan keberhasilan atau kegagalan
// sebuah event yang asynchronous di masa depan

// janji (terpenuhi / tidak terpenuhi)
// states (pending / fulfilled / rejected)
// callback (resolve / reject / finally)
// aksi (then / catch)









// contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve('Janji ditepati');
  } else {
    reject('Janji tidak ditepati');
  }
});
janji1
  .then(result => console.log('OK : ' + result))
  .catch(error => console.log('NOT OK : ' + error));

// contoh 2
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => resolve('Ditepati setelah 2 detik'), 2000);
  } else {
    setTimeout(() => reject('Tidak ditepati setelah 2 detik'), 2000);
  }
});
console,log('Start');
// console.log(janji2.then(() => console.log('OK'))
//                   .catch(() => console.log('NOT OK')));
janji2
  .finally(() => console.log('Finally')) // digunakan untuk simulasi loading
  .then(result => console.log('OK : ' + result))
  .catch(error => console.log('NOT OK : ' + error));
console.log('End');

// contoh 3 (promise.all)
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avengers',
      sutradara: 'Joss Whedon'
    }]);
  }, 1000);
});

const musik = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Die With Smile',
      penyanyi: 'Bruno Mars'
    }]);
  }, 500);
});
// film.then(respone => console.log(respone));
// musik.then(respone => console.log(respone));
Promise.all([film, musik])
  // .then(respone => console.log(respone));
  .then(respone => {
    const [film, musik] = respone;
    console.log(film, musik);
  });