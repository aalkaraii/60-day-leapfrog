function funnyString(s) {
  let original = s;
  let arrar1 = [];
  let arrar2 = [];
  let result1 = [];
  let result2 = [];

  let reverse = s.split("").reverse().join("");

  for (let i = 0; i < s.length; i++) {
    arrar1.push(original.charCodeAt(i));
    arrar2.push(reverse.charCodeAt(i));
  }

  for (let k = 1; k < arrar1.length; k++) {
    result1.push(Math.abs(arrar1[k] - arrar1[k - 1]));
    result2.push(Math.abs(arrar2[k] - arrar2[k - 1]));
  }

  for (let i = 0; i < result1.length; i++) {
    if (result1[i] !== result2[i]) {
      return "Not Funny";
    }
  }

  return "Funny";
}

let s = "lmnop";
console.log(funnyString(s));
