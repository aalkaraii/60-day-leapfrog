function camelcase(input) {
  // Write your code here
  let count = 1;
  for (i = 0; i <= input.length; i++) {
    let asciival = input.charCodeAt(i);
    if (asciival >= 65 && asciival <= 90) {
      count++;
    }
  }
  return count;
}

let input = "saveChangesInTheEditor";
console.log(camelcase(input));
//A=65;
//Z=90;
