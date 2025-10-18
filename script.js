const displayScreen = document.querySelector(".display");

let firstDigit = "";
let secondDigit = "";
let operator = "";
let currentInput = "";
let result = "";
// Number Variables
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");

// Operator Variables
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const equalTo = document.querySelector(".equalTo");
const del = document.querySelector(".del");

// Event Listeners
// for digits

one.addEventListener("click", () => {
  currentInput += 1;
  displayScreen.textContent = currentInput;
});

two.addEventListener("click", () => {
  currentInput += 2;
  displayScreen.textContent = currentInput;
});
three.addEventListener("click", () => {
  currentInput += 3;
  displayScreen.textContent = currentInput;
});
four.addEventListener("click", () => {
  currentInput += 4;
  displayScreen.textContent = currentInput;
});
five.addEventListener("click", () => {
  currentInput += 5;
  displayScreen.textContent = currentInput;
});
six.addEventListener("click", () => {
  currentInput += 6;
  displayScreen.textContent = currentInput;
});
seven.addEventListener("click", () => {
  currentInput += 7;
  displayScreen.textContent = currentInput;
});
eight.addEventListener("click", () => {
  currentInput += 8;
  displayScreen.textContent = currentInput;
});
nine.addEventListener("click", () => {
  currentInput += 9;
  displayScreen.textContent = currentInput;
});
zero.addEventListener("click", () => {
  currentInput += 0;
  displayScreen.textContent = currentInput;
});
decimal.addEventListener("click", () => {
  if (currentInput.includes(".")) {
    return;
  } else {
    currentInput += ".";
    displayScreen.textContent = currentInput;
  }
});

// // operators
divide.addEventListener("click", function () {
  displayScreen.textContent = "/";
  operator = "toDivide";

  if (firstDigit === "") {
    firstDigit = parseFloat(currentInput);
  }
  currentInput = "";
});
multiply.addEventListener("click", function () {
  displayScreen.textContent = "*";
  operator = "toMultiply";

  if (firstDigit === "") {
    firstDigit = parseFloat(currentInput);
  }
  currentInput = "";
});
minus.addEventListener("click", function () {
  displayScreen.textContent = "-";
  operator = "toMinus";

  if (firstDigit === "") {
    firstDigit = parseFloat(currentInput);
  }
  currentInput = "";
});
plus.addEventListener("click", function () {
  displayScreen.textContent = "+";
  operator = "toPlus";

  if (firstDigit === "") {
    firstDigit = parseFloat(currentInput);
  }
  currentInput = "";
});

del.addEventListener("click", toClearAll);

equalTo.addEventListener("click", toCalculate);

// Functions
// for Operation

function toDivide() {
  const valueOriginal = firstDigit / secondDigit;
  const value = parseFloat(valueOriginal.toFixed(2));
  displayScreen.textContent = value;
}

function toMultiply() {
  const valueOriginal = firstDigit * secondDigit;
  const value = parseFloat(valueOriginal.toFixed(2));
  displayScreen.textContent = value;
}

function toMinus() {
  const valueOriginal = firstDigit - secondDigit;
  const value = parseFloat(valueOriginal.toFixed(2));
  displayScreen.textContent = value;
}

function toPlus() {
  const number1 = Number(firstDigit);
  const number2 = Number(secondDigit);
  const valueOriginal = number1 + number2;
  const value = parseFloat(valueOriginal.toFixed(2));
  displayScreen.textContent = value;
}

function ifEmpty() {
  const value = (firstDigit = currentInput);

  displayScreen.textContent = value;
}

// for Clear
function toClearAll() {
  firstDigit = "";
  secondDigit = "";
  operator = "";
  currentInput = "";
  displayScreen.textContent = "";
}

function toCalculate() {
  let operatorValue = operator;
  switch (operatorValue) {
    case "toDivide":
      toDivide();
      break;
    case "toMultiply":
      toMultiply();
      break;
    case "toMinus":
      toMinus();
      break;
    case "toPlus":
      toPlus();
      break;
    default:
      ifEmpty();
      break;
  }
}

function clearValue() {
  currentInput = "";
  firstDigit = "";
  secondDigit = "";
  operator = "";
}

equalTo.addEventListener("click", function () {
  secondDigit = parseFloat(currentInput);
  if (divideByZero()) return;
  toCalculate();
  clearValue();
});

function divideByZero() {
  if (operator === "toDivide" && secondDigit === 0) {
    displayScreen.textContent = "finally, you tried";
    clearValue();
    return true;
  }
}
