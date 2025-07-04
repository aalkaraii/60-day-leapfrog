function selectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[min]) {
        arr[j] = arr[min];
      }
      [arr[j], arr[min]] = [arr[min], arr[j]];
    }
  }
  return arr;
}
arr = [5, 4, 6, 3, 7, 2, 1, 8];
selectionSort(arr);
console.log(selectionSort(arr));
