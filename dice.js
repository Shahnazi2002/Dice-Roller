function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
}

function printNumber(number) {
  var output = document.getElementById("result");
  output.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function () {
  var result = rollDice();
  printNumber(result);
};