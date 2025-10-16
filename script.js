const displayScreen = document.querySelector('.display');

let firstDigit = 1;
let secondDigit = 4;
let operator = '';
// Number Variables
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const decimal = document.querySelector('.decimal');

// Operator Variables
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equalTo = document.querySelector('.equalTo');
const del = document.querySelector('.del');

// Event Listeners

// one.addEventListener('click', function () {
// 	displayScreen.textContent = 1;
// 	firstDigit = 1;
// });

// two.addEventListener('click', function () {
// 	displayScreen.textContent = 2;
// 	firstDigit = 2;
// });
// three.addEventListener('click', function () {
// 	displayScreen.textContent = 3;
// 	firstDigit = 3;
// });
// four.addEventListener('click', function () {
// 	displayScreen.textContent = 4;
// 	firstDigit = 4;
// });
// five.addEventListener('click', function () {
// 	displayScreen.textContent = 5;
// 	firstDigit = 5;
// });
// six.addEventListener('click', function () {
// 	displayScreen.textContent = 6;
// 	firstDigit = 6;
// });
// seven.addEventListener('click', function () {
// 	displayScreen.textContent = 7;
// 	firstDigit = 7;
// });
// eight.addEventListener('click', function () {
// 	displayScreen.textContent = 8;
// 	firstDigit = 8;
// });
// nine.addEventListener('click', function () {
// 	displayScreen.textContent = 9;
// 	firstDigit = 9;
// });
// zero.addEventListener('click', function () {
// 	displayScreen.textContent = 0;
// 	firstDigit = 0;
// });
// decimal.addEventListener('click', function () {
// 	displayScreen.textContent = '.';
// 	firstDigit = '.';
// });

// // operators
// divide.addEventListener('click', function () {
// 	displayScreen.textContent = '/';
// });
// multiply.addEventListener('click', function () {
// 	displayScreen.textContent = '*';
// });
// minus.addEventListener('click', function () {
// 	displayScreen.textContent = '-';
// });
// plus.addEventListener('click', function () {
// 	displayScreen.textContent = '+';
// });

function toAdd() {
	const value = firstDigit + secondDigit;
	displayScreen.textContent = value;
}

equalTo.addEventListener('click', toAdd);
