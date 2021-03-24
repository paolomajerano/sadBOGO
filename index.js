//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Creates array of size sizeOfArray - 1 with integers 1 to sizeOfArray
function initArray(sizeOfArray) {
  var array = [];
  for (i = 1; i <= sizeOfArray; i++) {
    array.push(i);
  }
  return array;
}

//https://stackoverflow.com/questions/872310/javascript-swap-array-elements
Array.prototype.swap = function (x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

function bogoSwap(numberOfSwaps, array) {
  for (i = 0; i < numberOfSwaps; i++) {
    array.swap(getRandomInt(array.length), getRandomInt(array.length));
  }
  return array;
}

function getRandomArray(max) {
  return bogoSwap(max / 2, initArray(max));
}

function main() {
  console.log(getRandomArray(3));
}

main();
