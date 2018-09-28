module.exports = function getZerosCount(number) {
  var zeros = 0;
  var zeros = 0;

  var amountOfEvery5NNumber = number;
  var power = 1;
  while (amountOfEvery5NNumber > 0) { //every 5, 25, 625 ... number produces 0 at multiplying
      amountOfEvery5NNumber = Math.trunc(number / Math.pow(5, power++));
      zeros += amountOfEvery5NNumber;
  }

  return zeros;
  
}
