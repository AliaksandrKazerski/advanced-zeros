module.exports = function getZerosCount(number, base) {
  var prNum = [2], resultArr = [];
  next:// create an array of primes range from 0 to base
  for (var i = 2; i <= base; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        continue next;
      }
      if (i !== prNum[prNum.length - 1])
      prNum.push(i);
    } 
  }
  for (i = 0; i < prNum.length; i++) { // loop divides base into prime numbers and divides number into this prime numbers
    if (base === 1) { 
      break;
    }
    var count = 0, result = 0, numLoop = number;
    while (base % prNum[i] === 0){ 
      count++; // save pow
      base /= prNum[i];
    }
    while (numLoop >= prNum[i]) {
      numLoop = Math.floor(numLoop / prNum[i]);
      result += numLoop;
    }
    resultArr.push(Math.floor(result / count));   //  pow needed here and result push on array
  }
  return Math.min(...resultArr); // return min result from array
}