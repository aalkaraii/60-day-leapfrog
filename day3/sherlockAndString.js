function isValid(s) {
  // Write your code here
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 0;
    }
    obj[s[i]]++;
  }
  let array = Object.values(obj);
  let obj2 = {};
  for (let i = 0; i < array.length; i++) {
    if (!obj2[array[i]]) {
      obj2[array[i]] = 0;
    }
    obj2[array[i]]++;
  }
  console.log(obj2);
  let array2 = Object.entries(obj2);
  if (array2.length == 1) {
    return "YES";
  }
  if (array2.length == 2) {
    if (
      Math.abs(array2[0][0] - array2[1][0]) == 1 &&
      (array2[0][1] == 1 || array2[1][1] == 1)
    ) {
      return "YES";
    }
    if (array2[0][0] == 1 && array2[0][1] == 1) {
      return "YES";
    }
    if (array2[1][0] == 1 && array2[1][1] == 1) {
      return "YES";
    }
  }
  return "NO";
}
let s = "aabbccddefff";
console.log(isValid(s));
