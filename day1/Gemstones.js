function gemstones(arr) {
  // Write your code here
  let obj = {};
  for (let i = 97; i <= 122; i++) {
    let key = String.fromCharCode(i);
    let value = Array.from({ length: arr.length }).map((item) => false);
    obj[key] = value;
  }
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      let newChar = arr[j][k];
      obj[newChar][j] = true;
    }
  }
  let count = 0;
  for (let l = 97; l <= 122; l++) {
    if (obj[String.fromCharCode(l)].every((item) => item)) {
      count++;
    }
  }
  return count;
}
let arr = ["abc", "abc", "bc"];
console.log(gemstones(arr));
