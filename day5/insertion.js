function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j >= 0 && arr[j + 1] < arr[j]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    }
  }
  return arr;
}
arr = [3, 4, 1, 2, 5, 8, 6, 7];
insertion(arr);
console.log(insertion(arr));
