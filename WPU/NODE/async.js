// Asynchronous
// Node async in terminal to run this code

const getUser = (id, callback) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? 'Ridho' : 'Edho';
    callback({ id, nama });
  }, time);
};
// callback adalah fungsi yang di jalankan ketika fungsi async dijalankan

const userSatu = getUser(1, (user) => {
  console.log(user);
});

const userDua = getUser(2, (user) => {
  console.log(user);
});

const halo = "Hello World";
console.log(halo);