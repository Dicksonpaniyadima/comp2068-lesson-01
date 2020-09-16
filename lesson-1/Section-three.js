//concat and string templates 
const first = "Dickson";
const last = "paniyadima";
const con = "My name is " + first + " " + last;
const strTmp = `My name is ${first} ${last}`;
console.log(`I AM ${first.toUpperCase()}`);

//Terminary statements
const message = (time < 7) ? "Cruising along" : "Still Working";
console.log(message);

//implicit returns
let age;
if (age)
    console.log(age);
else
    console.log(35);

console.log(age || 35);

console.log((age && first) || 35);