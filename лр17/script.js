// 1
let test_matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

function calculateAverages(matrix) {
  if (matrix.length === 0) return [[], []];
  const cols = matrix[0].length;
  const colSums = Array(cols).fill(0);
  for (const row of matrix) {
    row.forEach((num, i) => (colSums[i] += num));
  }
  const columnAverages = colSums.map((sum) => sum / matrix.length);
  const rowAverages = matrix.map(
    (row) => row.reduce((a, b) => a + b, 0) / row.length
  );
  return [columnAverages, rowAverages];
}

console.log(`1: ${calculateAverages(test_matrix)}`);

// 2

let test_arr1 = [123, "qwe", "asd"];
let test_arr2 = [456, "rty"];

function merge(arr1, arr2) {
  return Array.from(
    { length: Math.max(arr1.length, arr2.length) },
    (_, i) =>
      (arr1[i] !== undefined ? String(arr1[i]) : "") +
      (arr2[i] !== undefined ? String(arr2[i]) : "")
  );
}

console.log(`2: ${merge(test_arr1, test_arr2)}`);

// 3

let test_sentence = "heloo world";

function letterFrequency(sentence) {
  return sentence
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (/[a-z]/.test(char)) acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
}

console.log("3:", letterFrequency(test_sentence));

// 4

let test_arr3 = [1, 2, 3, 4, 5];
let test_reminder = 3;

function sortByRemainder(arr, n) {
  return [...arr].sort((a, b) => {
    const remA = ((a % n) + n) % n;
    const remB = ((b % n) + n) % n;
    return remA - remB || a - b;
  });
}

console.log(`4: ${sortByRemainder(test_arr3, test_reminder)}`);

// 5

let test_arr5 = [3.14, 2.28, 1.337, 14.88];

function splitIntoParts(numbers) {
  const integerParts = numbers.map((num) => Math.trunc(num));
  const fractionalParts = numbers.map((num) => {
    const int = Math.trunc(num);
    return num - int;
  });
  return [integerParts, fractionalParts];
}

console.log(`5: ${splitIntoParts(test_arr5)}`);

// 6

let test_dictionary1 = [
  "apple",
  "pineapple",
  "banana",
  "cucumber",
  "camembert",
];
let test_dictionary2 = ["app", "er"];

function createDictionary(arr1, arr2) {
  return arr2.reduce((dict, key) => {
    dict[key] = arr1.filter((str) => str.includes(key));
    return dict;
  }, {});
}

console.log("6:", createDictionary(test_dictionary1, test_dictionary2));

// 7

let test_arr6 = [1, [2, [3, 4], 5], [6]];

function sumNestedArrays(arr) {
  return arr
    .flatMap((e) =>
      Array.isArray(e) ? sumNestedArrays(e) : typeof e === "number" ? e : []
    )
    .reduce((sum, num) => sum + num, 0);
}

console.log("7:", sumNestedArrays(test_arr6));

function snail(array) {
  var result = [];
  while (array.length) {
    result.push(...array.shift());
    array.map((row) => result.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return result;
}

let array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.log(snail(array));
