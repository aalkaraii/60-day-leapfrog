function quick(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let lessElements = [];
  let moreElements = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lessElements.push(arr[i]);
    } else {
      moreElements.push(arr[i]);
    }
  }
  let lessarr = quick(lessElements);
  let morearr = quick(moreElements);
  return [...lessarr, pivot, ...morearr];
}
let arr = [3, 4, 2, 1, 5];
quick(arr);
console.log(quick(arr));
