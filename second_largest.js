arr = [12, 3, 8, 9, 16, 8, 5, 7, 13, 14];
arr = [-10, -8, -2, -12, 10, 2, 2];
arr = [20, 10, 20]; //&& arr[i] != firstLargest
// const secondLargest = () => {
//   let firstLargest = -Infinity;
//   let secondLargest = -Infinity;
//   for (i = 0; i <= arr.length; i++) {
//     if (arr[i] > firstLargest) {
//       firstLargest = arr[i];
//     } else if (arr[i] <= firstLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// };

const secondLargest = () => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargest(arr));
