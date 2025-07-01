function theLoveLetterMystery(s) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length / 2; i++) {
    count = count + Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - 1 - i));
  }

  return count;
}
s = "abcde";
console.log(theLoveLetterMystery(s));
