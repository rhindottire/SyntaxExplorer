// Spread Operator
// memecah iterable menjadi single element

const mhs = ['Andi', 'Budi', 'Cici'];
const mhs2 = [...mhs[0]];

// menggabungkan 2 array
const mhs3 = ['dodo', 'dio', 'edho'];
const dosen = ['ridho', 'dodo', 'edo'];
const orang = [...mhs3, 'Achmad',...dosen];
// const orang2 = mhs3.concat(dosen);
console.log(orang);

// mengcopy array
const mhs4 = ['dodo', 'dio', 'edho'];
const mhs5 = [...mhs4];
mhs5[0] = 'Achmad';
console.log(mhs5);

const liMhs = document.querySelectorAll('li');
// const mahaSigma = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mahaSigma.push(liMhs[i].textContent);
// }
const mahaSigma2 = [...liMhs].map((mhs) => mhs.textContent);
console.log(mahaSigma2);

const hero = document.querySelector('.hero');
const hero2 = [...hero.textContent].map(h => `<span>${h}</span>`).join('');
hero.innerHTML = hero2;
console.log(hero2);