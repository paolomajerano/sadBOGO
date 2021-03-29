/**
    @param {int} max = max integer value that the function can return
    @returns {int} a random integer that is between 0 and a max value
    O(1)
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
    @param {int} maxValue = The max value of the array that will be built
    @returns {Array} array of integers between 1 to maxValue with size maxValue - 1 
    O(maxValue)
*/
function initArray(maxValue) {
  var array = [];
  for (i = 1; i <= maxValue; i++) {
    array.push(i);
  }
  return array;
}

/** 
    @param {int} x = integer position of first element to be swapped
    @param {int} y = integer position of second element to be swapped
    @returns {Array} an array that has elements swaped at the given positions
    @throws {RangeError} either arguement must be less than the array length and greater than 0
    O(1)
    https://stackoverflow.com/questions/872310/javascript-swap-array-elements
*/
Array.prototype.swap = function (x, y) {
  if ((x || y) > this.length || (x || y) < 0) {
    throw RangeError;
  }
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

/**
    @param {Array} array = array to be randomized swapped
    @returns {Array} Array that is swapped randomly numberOfSwaps many time
    O(array.length)
*/
function bogoSwap(array) {
  for (i = 0; i < array.length; i++) {
    array.swap(i, getRandomInt(array.length));
  }
  return array;
}

/**
    @param {int} max = The greatest value in the array
    @param {number} factor = multiplicity factor that dictates the number of swaps
    @returns {Array} Array from 1 to max that is randomized 
    O(max) 
 */
function getRandomArray(max = 1) {
  return bogoSwap(initArray(max));
}

module.exports = {
  getRandomArray,
};
