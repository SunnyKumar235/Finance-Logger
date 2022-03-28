"use strict";
// const character = "Sunny";
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach (input =>{
//     console.log(input)
// })
// const circ = (diameter: number) => {
//     return diameter * Math.PI
// }
// console.log(circ(10));
const input = ["Sunny", "Kumar", "Lalwani"];
input.push("Hi");
let mixed = ["abc", 1243, true];
mixed.push(345);
let nija = {
    name: "nija",
    age: 22,
    belt: "black"
};
nija.age = 23;
nija.belt = "Red";
nija.name = "roya";
let array = [];
array.push("22");
let mixedArray = []; //union type
mixedArray.push("Sunny");
mixedArray.push(10);
mixedArray.push(true);
let oneObject;
oneObject = { name: "Sunny", age: 20 };
let age = 25;
age = "Sunny";
age = true;
console.log('test');
let greet;
greet = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
const minus = (a, b) => {
    return a - b;
};
greet(0, 0);
const result = minus(10, 15);
const logDetail = (uid, item) => {
    console.log(uid);
};
const greetAgain = (user) => {
    console.log(user);
};
let greeting;
greeting = (firstString, secondString) => {
    console.log(`this is first ${firstString} and this is se ${secondString}`);
};
greeting("hi", "hello");
let cal;
cal = (oneNum, secondNum, action) => {
    if (action == 'add') {
        return oneNum + secondNum;
    }
    else {
        oneNum - secondNum;
    }
};
let loginDetail;
loginDetail = (obj) => {
    console.log(obj);
};
