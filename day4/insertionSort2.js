function swap(a, b) {
  if (a > b) {
    let val = a;
    a = b;
    b = val;
  }
}
function insertionSort2(n, arr) {
  // Write your code here
  for (let i = 0; i < n; i++) {
    let currentElement = arr[i];
    lastIndex = i - 1;
    console.log("currentElement", currentElement);

    console.log("i", i);
    console.log("lastIndex", lastIndex);
    while (lastIndex >= 0 && arr[lastIndex] > currentElement) {
      arr[lastIndex + 1] = arr[lastIndex];
      lastIndex--;
    }
    arr[lastIndex + 1] = currentElement;
  }
  return arr;
}
let n = 7;
let arr = [3, 4, 7, 5, 6, 2, 1];
console.log(insertionSort2(n, arr));
// 3 4 7 5 6 2 1
// 3 4 7 5 6 2 1
// 3 4 5 7 6 2 1
// 3 4 5 6 7 2 1
// 2 3 4 5 6 7 1
// 1 2 3 4 5 6 7
