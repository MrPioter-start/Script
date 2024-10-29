//let ucFirst = (str) => {};
let ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1, str.length);

let checkSpam = (str) =>
  str.includes("MMM") || str.includes("torrent") ? true : false;

let truncate = (str, maxlength) =>
  str.length <= maxlength
    ? str
    : str.slice(0, maxlength) + ".".repeat(str.length - maxlength);

let extractCurrencyValue = (str) =>
  str.charAt(0) === "$" ? str.slice(1) : str;

let Space = (str) =>
  str.split("").filter((char) => char === " ").length > 1
    ? str.slice(str.indexOf(" ") + 1, str.lastIndexOf(" "))
    : "";

let str = ucFirst("gsdkgdskdg");
console.log(str);
let str2 = checkSpam("ewgeggegwdfMM");
console.log(str2);
let str3 = truncate("egerger", 3);
console.log(str3);
let str4 = extractCurrencyValue("$1234");
console.log(str4);
let str5 = Space("fdsfds sssss ffmggmgm ggggg");
console.log(str5);
