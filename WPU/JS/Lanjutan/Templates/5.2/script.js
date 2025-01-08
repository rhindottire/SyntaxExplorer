// HTML fragments
const mhs = {
  nama: "Ridho",
  umur: 17,
  nim : 230411100197,
  email: "achmadaliridho46@gmail.com",
};

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nim">${mhs.nim}</span>
</div>`;
// console.log(el);

// Looping
const students = [
  {
    nama: "Ridho",
    umur: 18
  },
  {
    nama: "Edho",
    umur: 17
  },
  {
    nama: "Dodo",
    umur: 20
  },
];
const e = `<div class="students">
  ${students.map(s => `<ul>
    <li>${s.nama}</li>
    <li>${s.umur}</li>
  </ul>`).join('')}
</div>`

// kondisi
const songs = {
  title: "Moth To A Flame",
  artist: "Swedish House Mafia",
  feat: "The Weeknd",
};
const element = `<div class="songs">
  <ul>
    <li>${songs.title}</li>
    <li>${songs.artist} ${songs.feat ? `(feat.${songs.feat})` : ``}</li>
  </ul>
</div>`;

// nested html fragments
const me = {
  nama: "Achmad Ridho",
  semester: 3,
  matkul: [
    "PAW",
    "JARKOM",
    "DATABASE",
  ],
};
function printMatkul(matkul) {
  return `<ol>
    ${matkul.map(m => `<li>${m}</li>`).join((""))}
  </ol>`
}
const aduhGantengnya = `<div class="me">
  <h2>${me.nama}</h2>
  <span class="semester">Semester: ${me.semester}</span>
  <h4>Mata Kuliah:</h4>
  ${printMatkul(me.matkul)}
</div>`

document.body.innerHTML = aduhGantengnya;