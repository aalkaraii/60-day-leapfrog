function gameOfThrones(s) {
  // Write your code here
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 0;
    }
    obj[s[i]]++;
  }
  let array = Object.values(obj).filter((item) => {
    return item % 2 !== 0;
  });
  if (s.length % 2 == 0 && array.length == 0) {
    return "YES";
  }
  if (s.length % 2 !== 0 && array.length == 1) {
    return "YES";
  }
  return "NO";
}
let s = "aabbccdd";
console.log(gameOfThrones(s));
//  2 = aaaa bbb  aabbbaa //even odd
//      aaaa bbbb   aabbbbaa //even even
//      aaa bbb   abba
//  3 = abccba

// abcbcba
