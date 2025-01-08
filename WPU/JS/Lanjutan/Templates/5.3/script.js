const nama = "Ridho";
const umur = 20;

// function print(strings, nama, umur) {
//   return email;
// }
function print(strings, ...values) {
  // return values;
  // let result = "";
  // strings.forEach((string, i) => {
  //   result += `${string}${values[i] || ""}`
  // });
  // return result;

  return strings.reduce((result, string, i) => {
    return `${result}${string}${values[i] || ""}`;
  }, "");
}
const str = print`Halo nama saya ${nama}, berumur ${umur} tahun.`;
// console.log(str);





function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return `${result}${string}<span class="HL">${values[i] || ""}</span>`;
  }, "");
}
const s = highlight`Halo nama saya ${nama}, berumur ${umur} tahun.`;
// console.log(s);
document.body.innerHTML = s;