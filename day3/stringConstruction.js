function stringConstruction(s) {
  // Write your code here
  let p = "";
  let count = 0;
  let array1 = [];
  let array2 = [];
  for (let i = 0; i < s.length; i++) {
    array1.push(s[i]);
  }
  const letters = new Set(array1);
  console.log(letters);
  return letters.size;
}
s = "abcd";
console.log(stringConstruction(s));
