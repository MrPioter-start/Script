/*let n = 46288,
  p = 3;
//countBits = (n) => n.toString(2).split("0").join("").length;
let a = n * p;
//console.log(countBits(n));

let number = n.toString().split("");
//let resul = number.reduce((n, p) => Math.pow(n, p), p++);
console.log(number);
//console.log(resul);
let result = 0;
for (let i = 0; i < number.length; i++) {
  let num = Number(Math.pow(number[i], p));
  result += num;
  p++;
}
//if (a !== result) console.log("-1");
if (Number.isInteger(result)) result.isInteger();
console.log(result);
console.log(result / n);
console.log(a);

let result2 = n
  .toString()
  .split("")
  .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
return result % n ? -1 : result / n;
*/
/*let n = 27;
let str = {
  1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  2: "BBCDEFGHIJKLMNOPQRSTUVWXYZ",
  3: "CCCDEFGHIJKLMNOPQRSTUVWXYZ",
  4: "DDDDEFGHIJKLMNOPQRSTUVWXYZ",
  5: "EEEEEFGHIJKLMNOPQRSTUVWXYZ",
  6: "FFFFFFGHIJKLMNOPQRSTUVWXYZ",
  7: "GGGGGGGHIJKLMNOPQRSTUVWXYZ",
  8: "HHHHHHHHIJKLMNOPQRSTUVWXYZ",
  9: "IIIIIIIIJKLMNOPQRSTUVWXYZ",
  10: "JJJJJJJJJJKLMNOPQRSTUVWXYZ",
  11: "KKKKKKKKKKLMNOPQRSTUVWXYZ",
  12: "LLLLLLLLLLLMNOPQRSTUVWXYZ",
  13: "MMMMMMMMMMMNOPQRSTUVWXYZ",
  14: "NNNNNNNNNNNNNOPQRSTUVWXYZ",
  15: "OOOOOOOOOOOOOOPQRSTUVWXYZ",
  16: "PPPPPPPPPPPPPPPQRSTUVWXY",
  17: "QQQQQQQQQQQQQQQQQRSTUVWXYZ",
  18: "RRRRRRRRRRRRRRRRRSTUVWXYZ",
  19: "SSSSSSSSSSSSSSSSSSTUVWXYZ",
  20: "TTTTTTTTTTTTTTTTTTTUWXYZ",
  21: "UUUUUUUUUUUUUUUUUUUUVWXYZ",
  22: "VVVVVVVVVVVVVVVVVVVVVWXYZ",
  23: "WWWWWWWWWWWWWWWWWWWWWXYZ",
  24: "XXXXXXXXXXXXXXXXXXXXXXXYZ",
  25: "YYYYYYYYYYYYYYYYYYYYYZZZ",
  26: "ZZZZZZZZZZZZZZZZZZZZZZZZZ",
};

console.log(n <= 26 ? str[n] : (n = n - 26) <= 26 ? str[n] : 0);
*/
/*let n = 1;
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
while (n >= 27) {
  n = n - 26;
}
if (n == 1) return string.slice(n - 1);
if (n > 1 && n < 27) {
  let output = `${string[n - 1].repeat(n - 1)}${string.slice(n - 1)}`;
  console.log(output);
}*/

/*let data = "iiisxxxdoso";
let res = [];
let count = 0;
data.split("").reduce((count, val) => {
  if (val === "i") count += 1;
  if (val === "d") count -= 1;
  if (val === "s") count = Math.pow(count, 2);
  if (val === "o") res.push(count);
  return count;
}, count);

console.log(res);
*/

/*let n = 12n,
  b = 2n;

let reversed = n.toLocaleString(b).split("").reverse().join("");
reversed = reversed.toString();
console.log(parseInt(reversed, b));

while (n > 0n) {}

throw new Error("пп");
*/
let MyError = (message) => console.log(`My error = ${message}`);
let array = ["asad", "asdsaf", "as", "a"];
array.filter((a) => a === " ");
console.log(array.map((a) => a.length));

let resault = (function () {
  console.log("laalall");
})(); // IIFES Function
//Object arguments
console.log(typeof arguments);
function ArgFunc(a, b) {
  let arg = arguments;
  console.log(arg[0]);
  return (arguments[0] += arguments[1]);
}
console.log(ArgFunc(1, 2));
let regex = /\./g;
var replaceDots = function (str) {
  return str.replace(regex, "-");
};

let str = replaceDots("one.two.three");
console.log(str);

function entrX(x) {
  return function (y) {
    return x + y;
  };
}

let a = entrX(1);
console.log(a(2));

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  tellUsAboutYourself() {
    return `My name is ${this.name}\nI'm ${this.age}`;
  }
  woof() {
    return "Woof";
  }
}

let dog = new Dog("Vasya", 3);
console.log(dog.tellUsAboutYourself());

class Cat {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  meow() {
    return "MEOW!!!";
  }
}

let sparkles = new Cat("Sparkles", 5, "Siamese");

console.log(dog.tellUsAboutYourself.call(sparkles));
console.log(dog.tellUsAboutYourself.apply(sparkles));
const tellAboutCat = dog.tellUsAboutYourself.bind(sparkles);
console.log(tellAboutCat());
