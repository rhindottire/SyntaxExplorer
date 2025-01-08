const videos = Array.from(document.querySelectorAll("[data-duration]"));

const totalDuration = videos
  .filter(video => video.textContent.includes("JavaScript"))
  .map(video => {
    const [minutes, seconds] = video.dataset.duration.split(":").map(Number);
    return minutes * 60 + seconds;
  })
  .reduce((total, seconds) => total + seconds, 0);

const hours = Math.floor(totalDuration / 3600);
const remainingSeconds = totalDuration % 3600;
const minutes = Math.floor(remainingSeconds / 60);
const seconds = remainingSeconds % 60;

document.querySelector(".duration").textContent = `${hours} jam, ${minutes} menit, ${seconds} detik.`;

const jsVideoCount = videos.filter(video => video.textContent.includes("JavaScript")).length;
document.querySelector(".videos").textContent = `${jsVideoCount} Video.`;