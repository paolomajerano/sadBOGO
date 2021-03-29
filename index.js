const bogo = require("./src/bogo");

function logToConsole() {
  console.log(bogo.getRandomArray(10000));
}

module.exports = {
  logToConsole,
};
