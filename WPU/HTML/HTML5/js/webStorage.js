const h1 = document.querySelector("h1");
let nama = localStorage.getItem("nama");
if (!nama) {
  nama = prompt("Input your name");
  localStorage.setItem("nama", nama); // key, value
  // sessionStorage.setItem("nama", nama);
}
h1.innerHTML = `Hello ${nama}`;

const gantiNama = (e) => {
  nama = localStorage.getItem("nama");
  localStorage.setItem("nama", prompt("Input your name"));
  e.preventDefault();
}

const hapusNama = (e) => {
  localStorage.removeItem("nama");
  e.preventDefault();
}

const toggle = document.querySelector(".toggle");
let theme = localStorage.getItem("theme");
if (!theme) {
  localStorage.setItem("theme", "light");
}

const lightMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  toggle.innerHTML = "Dark Mode";
}
const darkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  toggle.innerHTML = "Light Mode";
}

if (theme === "dark") {
  darkMode();
}

toggle.addEventListener("click", (e) => {
  if (theme === "light") {
    lightMode();
  } else {
    darkMode();
  }
  e.preventDefault();
});

const clearStorage = () => {
  localStorage.clear();
}