// Synchronous

const getUserSync = (id) => {
  // let nama = '';
  // if (id === 1) {
  //   nama = 'Ridho';
  // } else {
  //   nama = 'Edho';
  // }
  // return { id: id, nama: nama }

  const nama = id === 1 ? 'Ridho' : 'Edho';
  return { id, nama };
};

const user = getUserSync(1);
console.log(user);

const user2 = getUserSync(2);
console.log(user2);

const halo = "Hello World";
console.log(halo);