// ambil semua element
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// console.log(videos); // ubah node list menjadi array

// get JS
let jsVideos = videos.filter(video => video.textContent.includes("JavaScript"))
  // get duration
  .map(item => item.dataset.duration)
  // ubah durasi menjadi float, ubah menit menjadi detik
  .map(waktu => {
    // 10:30 -> [10,30] split
    const parts = waktu.split(":")
    // konversi jadi float
    .map(part => parseFloat(part));
    return (parts[0] * 60 + parts[1]);
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);
console.log(jsVideos);

// ubah format menjadi jam
const jam = Math.floor(jsVideos / 3600);
console.log(jam, "Jam");
jsVideos = jsVideos - jam * 3600
console.log(jsVideos, "Sisa Detik");

const menit = Math.floor(jsVideos / 60);
console.log(menit, "Menit");
const detik = jsVideos - menit * 60;
console.log(detik, "Detik");

// save in DOM
const pDurasi = document.querySelector(".duration");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`
// console.log(pDurasi);
const totalVideos = videos.filter(video => video.textContent.includes("JavaScript")).length;
console.log(totalVideos, "Total Videos")

const aduhGantengnya = document.querySelector(".videos")
aduhGantengnya.textContent = `${totalVideos} Video.`