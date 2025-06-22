function strangeCounter(t) {
  let initialValue = 3;

  let value = initialValue;
  for (let time = 2; time <= t; time++) {
    if (value === 1) {
      value = initialValue * 2;
      initialValue = value;
    } else {
      value -= 1;
    }
  }

  return value;
}
let t = 4;
console.log(strangeCounter(t));
//step1:value=3; and time =1 to...
//step2:loop form 1 to time t
//step 3:decrease value by 1 and increast time by 1
//step4: after loop set value=prevval*prevVal;
