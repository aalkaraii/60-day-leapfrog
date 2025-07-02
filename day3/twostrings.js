function twoStrings(s1, s2) {
  // Write your code here
  let array1 = [];
  let array2 = [];
  for (let i = 0; i < s1.length; i++) {
    array1.push(s1[i]);
  }
  for (let i = 0; i < s2.length; i++) {
    array2.push(s2[i]);
    if (array1.includes(s2[i])) {
      return "YES";
    }
  }
  return "no";
}
let s1 = "hi";
let s2 = "world";
console.log(twoStrings(s1, s2));
