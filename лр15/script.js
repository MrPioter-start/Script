//let ucFirst = (str) => {};
function ucFirst(str) {
  let length = str.length;
  return str.charAt(0).toUpperCase() + str.slice(1, length);
}

let str = ucFirst("gsdkgdskdg");
console.log(str);
