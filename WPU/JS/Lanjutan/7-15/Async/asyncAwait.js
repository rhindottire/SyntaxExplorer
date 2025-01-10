const coba = new Promise(resolve => {
  setTimeout(() => {
    resolve("Hello World");
  }, 2000);
});
coba.then(() => console.log(coba));


function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("Selesai");
      }, waktu);
    } else {
      reject(new Error("Waktu habis"));
    }
  });
}
// const coba2 = cobaPromise();
// coba2
//   .then((coba2) => console.log(coba2))
//   .catch(coba2 => console.log(coba2));

async function cobaAsync() {
  try {
    const coba2 = await cobaPromise();
    console.log(coba2);
  } catch (error) {
    console.error(error);
  }
}
cobaAsync();