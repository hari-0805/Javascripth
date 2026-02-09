//Task 1
var a=1;
    a=2;
var a=3;
console.log(a); // o/p:3

//Task 2
let b=1;
    b=2;
//let b=3; can't redeclare if - syntax error
console.log(b); // O/P:2

//Task 3
const c=10;
    //c=20; can't reassign if- type error
//const c=30; can't redeclare if- syntax error
console.log(a); // O/P:10

//Task 4
var x=100;
let y=200;
const z=300;

x=400;
y=500;
// z=600; can't reassign

console.log(x,y,z); // O/P: 400 500 300

//Task 5
var dm ="Hari";
console.log(dm); // Hari
alert(dm); // oop - Hari
document.writeln(dm); // page - Hari

//Task 6
let x = confirm("Futher process")
console.log(x); // O/P: true or False

//Task 7
let x=prompt("Store the data");
console.log(x); // pop - getting user data
document.writeln(x); // data on web

// Task 8
var y2="ERROR";
console.log(y2);
console.warn(y2);//yellow
console.error(y2);//red

// Task 9
var price=100;
console.log(price); // 100
    price=200;
    console.log(price); // 200

// Task 10
let z1 = true;
    z1 = false;
console.log(z1); // false

// Task 11
let w = "Jana Nayagan";
console.log(w);
w = "Leo";
console.log(w);

// Task 12
var z2 = 100;
var z2 = 200;
var z2 = 300;
console.log(z2); // 300

// Task 13
const movie = {name:"Jana Nayagan",release:9};
movie.release=20;
console.log(movie); // name:"Jana Nayagan",release:20

// Task 14
var x3 = "The";
let y3 = "power";
const z3 = "loss";

console.log(x3);
console.warn(y3);
console.error(z3);