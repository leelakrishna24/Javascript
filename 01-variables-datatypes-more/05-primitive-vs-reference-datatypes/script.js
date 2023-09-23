// Values are stored on the stack
const name = 'john';
const age = 20;
console.log(name);
console.log(age);

// Reference values are stored on the heap
const person = {
     name: 'brad',
     age: 30,
}
console.log(person);

let newName = name;
newName = 'johnathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);
console.log(person, newPerson);