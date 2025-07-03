function insertion(array) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
  console.log(array);
}
let array = [2, 4, 1, 5, 3];
insertion(array);
console.log(insertion(array));
