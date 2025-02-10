// it is used in javascript to comment
// the best practice of write script code is inside html body tag
console.log('Hello World')

//variable declaration
let user_name = 'Hemnath';
console.log(user_name);

//constant means we cannot change the value like variables 
const user2_name = 'V';
console.log(user2_name);

// Data Types
let name = 'Name'; //string literal
let age = 23; //number literal
let boolean = true; //boolean literal
let nothing; //undefined (if nothing declared by default it become undefined)
let none = null; //null
console.log(typeof age); //Type checking

//Object
let person = {
    Name: 'Hemnath',
    Age: 23
};
console.log(person);

//Array
let selectedcolors = ['red', 'blue'];
console.log(selectedcolors);
//Acessing arrays
console.log(selectedcolors[1])
//Changing & adding values
selectedcolors[2] = 'green';
console.log(selectedcolors);

//Functions
function hemnath(name) {
    console.log("Hello " + name);
} //does not need semi-colon ending
hemnath('Hemnath');