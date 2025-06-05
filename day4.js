// birthdaycakecandles
function birthdayCakeCandles(candles) {
  let tallest = 0;
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > tallest) {
      tallest = candles[i];
      count = 1;
    } else if (candles[i] === tallest) {
      count++;
    }
  }

  return count;
}
let candles = [4, 4, 1, 3];
console.log(birthdayCakeCandles(candles)); // Output: 2

//timeconversion am/pm
function timeConversion(s) {
  let ampm = s.slice(-2);
  let time = s.slice(0, 8);
  let parts = time.split(":");

  let hour = parseInt(parts[0]);

  if (ampm === "AM") {
    if (hour === 12) hour = 0;
  } else {
    if (hour !== 12) hour += 12;
  }

  let hourStr = hour.toString().padStart(2, "0");

  return `${hourStr}:${parts[1]}:${parts[2]}`;
}
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("12:01:00PM"));

// apple orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  // Check where each apple lands
  for (let i = 0; i < apples.length; i++) {
    let landingSpot = a + apples[i];
    if (landingSpot >= s && landingSpot <= t) {
      appleCount++;
    }
  }

  // Check where each orange lands
  for (let i = 0; i < oranges.length; i++) {
    let landingSpot = b + oranges[i];
    if (landingSpot >= s && landingSpot <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
