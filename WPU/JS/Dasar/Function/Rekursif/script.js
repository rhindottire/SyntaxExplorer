function rekursif(n) {
  if (n == 1) return; // base case
  console.log(n);
  rekursif(n - 1);
}
rekursif(10);

function faktorial(n) {
  if (n == 1) return 1;
  return n * faktorial(n - 1);
}
console.log(faktorial(5));

// function fibo(n) {
//   if (n <= 2) return 1;
//   return fibo(n - 1) + fibo(n - 2);
// }
// console.log(fibo(10));

// function dataList(data) {
//   if (data.length == 0) return;
//   console.log(data[0]);
//   dataList(data.slice(1));
// }
// var data = [1, 2, 3, 4, 5];
// dataList(data);

// function tree(data) {
//   if (data.length == 0) return;
//   console.log(data[0]);
//   tree(data[0].children);
// }
// var data = [
//   { id: 1, children: [2, 3] },
//   { id: 2, children: [] },
//   { id: 3, children: [] }
// ]