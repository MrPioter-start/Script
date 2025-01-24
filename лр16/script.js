// 1
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    return -1;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 10));

// 2
function mostFrequentElement(arr) {
  if (arr.length === 0) return null;

  let maxCount = 0;
  let mostFrequent = arr[0];

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentCount = 0;

    for (let num of arr) {
      if (arr[i] === num) {
        currentCount++;
      }
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      mostFrequent = arr[i];
    }
  }

  return mostFrequent;
}

console.log(mostFrequentElement([1, 3, 2, 3]));

// 3
function arrayToString(arr) {
  return arr.join(", ");
}

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayToString(arr3));

// 4

function compareArr(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) return false;
  }

  return true;
}

console.log(compareArr([3, 2, 1, 0], [1, 2, 3, false]));
console.log(compareArr([1, 2, 1], [1, 2, 4]));
