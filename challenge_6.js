/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;
  this.naturalNumArray = [];
  for (let i = 0; i < this.naturalNumbers; i++) {
    this.naturalNumArray.push(i + 1);
  }
}

SumOfASquare.prototype.squareOfTheSums = function () {
  let total = this.naturalNumArray.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
  return Math.pow(total, 2);
}

SumOfASquare.prototype.sumOfSquares = function () {
  let total = this.naturalNumArray.reduce((sum, number) => {
    sum += Math.pow(number,2);
    return sum;
  }, 0);
  return total;
}

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
