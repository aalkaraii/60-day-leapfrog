function gameOfThrones(s) {
  // Write your code here
  let array = [];
  for (let i = 0; i < s.length; i++) {
    array.push(s.charCodeAt(i));
  }
  console.log(array);
}
let s = "aaabbbb";
console.log(gameOfThrones(s));
