let arr = [4, 2, 0, 10, 8, 30];

const searchElement = (arr, val) => {
  for (let i = 0; i <= arr.length; i++) {
    if (val == arr[i]) {
      return i;
    }
  }
  return -1;
};

// const result = searchElement(arr, 110);
// console.log(result);

// ===============================================================

const arr2 = [2, -9, 17, 0, 1, -10, -4, 8];
const findNegetiveNumber = (arr2) => {
  let negNum = [];
  for (let i = 0; i <= arr2.length; i++) {
    if (arr2[i] < 0) {
      negNum.push(arr2[i]);
    }
  }
  return negNum;
};

// console.log(findNegetiveNumber(arr2));

// =================Find Largest Number===================

const arr3 = [5, 0, 10, 8, 17, 1, 23, 8, 6];

const fingLargest = (arr) => {
  let largest = -Infinityff;
  for (let i = 0; i <= arr3.length; i++) {
    if (arr3[i] > largest) {
      largest = arr3[i];
    }
  }
  return largest;
};
console.log(fingLargest(arr));
