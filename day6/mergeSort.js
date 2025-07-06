function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let output = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left < leftIndex && right < rightIndex) {
      output.push(leftIndex);
      leftIndex++;
    } else {
      output.push(rightIndex);
      rightIndex++;
    }
  }
  if (leftIndex < left.length) {
    output.push(...left.slice(leftIndex));
  } else {
    output.slice(...right.slice(rightIndex));
  }
  return output;
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  mid = Math.floor(arr.length / 2);
  let leftarray = arr.slice(0, mid);
  let rightarray = arr.slice(mid, arr.length);
  let leftSort = mergeSort(leftarray);
  let rightSort = mergeSort(rightarray);
  return merge(leftSort, rightSort);
}
let arr = [3, 5, 2, 4, 1];
mergeSort(arr);
console.log(mergeSort(arr));
