// SECTION 1 – String & Type Conversion Tasks
// TASK-1 Name Builder
let firstName="HARI";
let lastName="HARAN";
let fullName = firstName + " " + lastName;
console.log(firstName+""+lastName); // HARI HARAN
console.log('${firstName} ${LastName}'); // HARI HARAN
console.log(fullName.length); // 12

// TASL-2 Predict Type (typeof)
console.log(typeof("5"+2)); // String
console.log(typeof(5 + "2")); // String
console.log(typeof(true + 1)); // Number
console.log(typeof(false + "hello")); // String
console.log(typeof(null + 1)); // Number

//TASK 3 – Manual Type Conversion
console.log(Number("100")); // 100
console.log(Number("10.5")); // 10.5
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// TASK 4 – Boolean Truthy / Falsy
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// TASK 5 – Even or Odd
let num = 7;
if (num%2==0){
    console.log("7 is even");
}else{
    console.log("7 is odd"); // 7 is odd 
}

// TASK 6 – Grade System
let mark=75;
if(mark >= 90){
    console.log("A");
}else if(mark >= 75){
    console.log("B"); // B
}else if(mark >= 50){
    console.log("C");
}else{
    console.log("Fail");   
}

// TASK 7 – Switch Day Finder
let day=3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuseday");
        break;
    case 3:
        console.log("Wednesday"); // Wednesday
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        break;
}

// SECTION 3 – Loops
// TASK 8 – Reverse Counting
for (let i = 0; i >= 1; i--) {
    console.log(i); // 5 4 3 2 1
}

// TASK 9 – Multiplication Table of 3
for (let i = 0; i <= 10; i++) {
    console.log('3x ${i} = ${3*1}');
    // 3 x 1 = 3
    // ...
}

// TASK 10 – Sum of First 10 Numbers
let sum=0;
for (let i = 0; i <= 10; i++) {
    sum += i; 
}
console.log(sum); // 55
