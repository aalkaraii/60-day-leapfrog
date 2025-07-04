function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
arr = [5, 4, 6, 3, 7, 2, 1, 8];
selectionSort(arr);
console.log(selectionSort(arr));
