let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Bob";
console.log(firstName);

// Template Strings
const myName = "Ivan";
const myAge = 44;

const ivan = "I'm " + myName + " I'm " + myAge + " years old";
console.log(ivan);

const ivan2 = `I'm ${myName} and I'm ${myAge} years old`;
console.log(ivan2);

/* Conditional

if() {

 } else {

} */

// Type Conversion: Explicity convert from one type to another

const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23));

// Type Coercion: JavaScript will dynamically convert the types
console.log("I am " + 23 + " years old");
console.log("23" + "10" + 3); // number will be converted to string and concatenated: '23103'
console.log("23" - "10" - 3); // strings will be converterted to numbers and the result is 10

// Type conversion booleans
// falsy values (5): 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
