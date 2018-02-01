// global variables
var number1 = 1;
var number2 = 11;
var output = document.getElementById('output');

// regular function with a return value
function calculate() {
	'use strict';
	// local variable
	var result = number1 + number2;
	return result;
}

console.log(calculate());

// ECMA 6 arrow function, with multiple statements you need to include a function body {}

var result = () => number1 + number2;

console.log(result());

// function with user input

function userInput() {
	'use strict';
	// let is restricting the scope to the actual code block, statement or expression
	let number1 = parseInt(prompt('Type a number:', ''));
	let number2 = parseInt(prompt('Type a number:', ''));
	let result = number1 + number2;
	// rendering the result:
	output.innerHTML = 'The result is: ' + result + '!';
}

// call to the function
//userInput();

// constructor function

function player (name, score){
	'use strict';
	this.name = name;
	this.score = score;
	
	this.greeting = function(){
		alert('Hi ' + this.name + ': Your score is ' + this.score);
	};
}

var myPlayer = new player('Peter', 65);
myPlayer.greeting();

