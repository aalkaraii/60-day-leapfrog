function bubble(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(arr);
}
let arr = [2, 4, 5, 1, 8, 3, 9, 7, 6];
console.log(bubble(arr));
