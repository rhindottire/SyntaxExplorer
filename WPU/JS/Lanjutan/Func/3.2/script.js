// Constructor Function
const Mahasiswa = function() {
  this.nama = 'Edho';
  this.umur = 20;
  this.sayHello = function() { // expression function
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  }
  // setInterval(function() { // anonymous/declaration function
  //   console.log(this.umur++); // NaN
  //   console.log(this); // window
  // }, 500);
  setInterval(() => { // arrow function
    console.log(this.umur++); // this refers to Mahasiswa object
  }, 500);
}
const Edho = new Mahasiswa();

// Arrow Function do not have their own this
const Mahasiswa1 = function() { // cannot use arrow function
  this.nama = 'Ridho';
  this.umur = 20;
  this.sayHello = () => {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  }
}
const Ridho = new Mahasiswa1();