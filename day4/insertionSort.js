function insertionSort1(n, arr) {
  // Write your code here
  let array = arr;
  let value = arr[n - 1];
  for (let i = 0; i < array.length; i++) {
    if (value < array[n - i - 2]) {
      arr[n - i - 1] = arr[n - i - 2];
      console.log(arr.join(""));
    } else {
      arr[n - i - 1] = value;
      console.log(arr.join(""));

      break;
    }
  }

  console.log(array);
}
let n = 5;
let arr = [1, 2, 4, 5, 3];
console.log(insertionSort1(n, arr));
