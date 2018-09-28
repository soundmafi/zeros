module.exports = function getZerosCount(number) {
  var zeros = 0;

  for (var i = 1; i <= number; i++) {
      if (i % 5 === 0 || i % 10 === 0) {
          var currNum = i;
          while (currNum % 10 === 0) {
              currNum /= 10;
              zeros++;
          }

          while (currNum % 5 === 0) {
              currNum /= 5;
              zeros++;
          }
      }
  }

  return zeros; 
  
}
