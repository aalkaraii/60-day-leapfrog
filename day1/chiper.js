function caesarCipher(s, k) {
  let string = "";

  for (let i = 0; i < s.length; i++) {
    let newDigit = s.charCodeAt(i);
    if (newDigit >= 65 && newDigit <= 90) {
      let nextDigit = newDigit + k;
      nextDigit = nextDigit > 90 ? (nextDigit % 91) + 65 : nextDigit;
      string += String.fromCharCode(nextDigit);
    } else if (newDigit >= 97 && newDigit <= 122) {
      let nextDigit = newDigit + k;
      nextDigit = nextDigit > 122 ? (nextDigit % 123) + 97 : nextDigit;
      string += String.fromCharCode(nextDigit);
    }
  }

  return string;
}

let s = "Myname-i'sNabin";
let k = 3;
console.log(caesarCipher(s, k));
