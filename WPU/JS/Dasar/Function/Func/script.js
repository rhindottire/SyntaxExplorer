// menjumlahkan 2 buah volume kubus

// var a = 10;
// var b = 20;
// var volumeA = a * a * a;
// var volumeB = b * b * b;

// var volumeTotal = volumeA + volumeB;
// console.log(volumeTotal)

function jumlahVolumeDuaKubus(a, b) {
  var volumeA;
  var volumeB;
  var volumeTotal;

  volumeA = a * a * a;
  volumeB = b * b * b;

  volumeTotal = volumeA + volumeB;

  return volumeTotal;
  
}
alert(jumlahVolumeDuaKubus(10, 20));
alert(jumlahVolumeDuaKubus(20, 30));
alert(jumlahVolumeDuaKubus(30, 40));