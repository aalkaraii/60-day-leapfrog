function minimumNumber(n, password) {
  let special = false;
  let number = false;
  let capital = false;
  let small = false;
  let count = 0;
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";
  // Return the minimum number of characters to make the password strong
  for (let i = 0; i < password.length; i++) {
    let letter = password[i];
    if (numbers.includes(letter)) {
      number = true;
    }
    if (lower_case.includes(letter)) {
      small = true;
    }
    if (upper_case.includes(letter)) {
      capital = true;
    }
    if (special_characters.includes(letter)) {
      special = true;
    }
  }
  if (!small) {
    count++;
  }
  if (!number) {
    count++;
  }
  if (!capital) {
    count++;
  }
  if (!special) {
    count++;
  }
  let totalLength = n + count;
  if (totalLength >= 6) {
    return count;
  }
  return count + (6 - totalLength);
}

let n = 3;
let password = "Abl";

console.log(minimumNumber(n, password));
