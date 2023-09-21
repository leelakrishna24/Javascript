// ways to declare variable
// var, let, const

// var is old 
// from es16 let and const are newly update

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName, age);

var age = 30;
console.log(age);

// Naming conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// let 1Name = 'bablu';
let oneName = 'bablu';
console.log(oneName);

// Reassigning variables
age = 31;
console.log(age);

age = age + 1;
console.log(age);

let Score;

Score = 1;

if (true){
     Score = Score + 1;
}

console.log(Score);

const x = 100;
console.log(x);
// x = x + 100;
// console.log(x);

console.log('changing of the value which is declared with const is not possible, example const x = 100, (x = x + 100, this doesn"t works as x is declared by const, read-only)');

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

const person = {
     name: 'Leela', 
};

console.log(person.name);

person.name = 'Sai';

console.log(person.name);

person.email = 'sai@gmail.com'

console.log(person.email);

// Declaring multiple values at once

let a, b, c;

const d = 10, e = 20, f = 30;

console.log(d);
console.log(e);
console.log(f);
