function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));

function add(x, y) {
    return x + y;
}

console.log(add(5, 6));

// Sentence Builder

function sBuilder(subject, verb, object, noun) {
    return `${subject} ${verb} with a ${object} and ${noun}`;
}

let sentence = sBuilder("Scott", "traveled", "laptop", "Guku");
let paragraph = sentence + ", " + sBuilder("Cameron", "played", "orange", "tree")

console.log(sentence);
console.log(paragraph);

// pure function - a function that returns the same result if the same arguments(input) are passed in the function.

// add(1, 1);
// add(1, 1);
// add(2, 2);
// add(2, 2);

// side effect function - it could return something different throught multiple same called scenarios 

let x = 1;

function multiply(y) {
    return x * y;
}

multiply(10);
multiply(12);
multiply(10);

// based on x, therefore a side effect. 


// local scopes
// 1. function scopes
        //a. Var
// 2. block scopes
        //a. let & const

// 

function greet2(name) {
    let greeting = deterimineGreeting();
    console.log(`${greeting}, ${name}!`);

    function deterimineGreeting() {
        if (name.length > 4) {
            return "Hello";
        } else {
            return "Hi";
        }
    }
}

greet2("joe");

// closure
function counter() {
    let count = 0;
    return function increment() {
        // increment is the inner scope
        // counter is the outer scope
        // increment's scope encloses teh variable count
        // and can access if after counter is executed
        count++;
        return count;
    };
}

let increment = counter(); 

console.log(increment());
console.log(increment());
console.log(increment());

// Recursion

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

function countUp(n) {
    if (n > 0) {
      let result = countUp(n - 1);
      return result;
    } else {
        return n;
    }
}


console.log(countUp(10));


// Exercise 1: Print Odds Continued

function printOdds(count) {
    for (let i = 0; i < count; i ++) {
        if (i % 2 != 0) {
            console.log(i);
        } 
        if (count < 0) {
            console.log("negative")
        } 
    }
}

printOdds();

// Exercise 2: Legal?

function checkAge(userName, age) {
 let aboveSixteen = `${userName}, you can drive!`;
 let belowSixteen = `Sorry ${userName}, but you need to wait ${
    16 - age
 } year(s) until you can drive.`;
    if (age >= 16) {
    console.log(aboveSixteen);
 } if (age < 16) {
    console.log(belowSixteen);
 }
}

checkAge("joe", 15)

// Exercise 3: Which Quadrant?

function checkQuadrant(x, y) {
    switch (true) {
        case x > 0 && y > 0:
            return "Quadrant 1";
        case x < 0 && y > 0:
            return "Quadrant 2";
        case x < 0 && y < 0:
            return "Quadrant 3";
        case x > 0 && y < 0:
            return "Quadrant 4";
        case x = 0 && y != 0:
            return "X Axis";
        case x != 0 && y == 0:
            return "Y Axis";
        default:
            return "Origin"
    }
}


console.log(checkQuadrant(11, 1))
console.log(checkQuadrant(-11, 1))

// Exercise 4: What type of triangle?

const isValidTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return 'Equilateral';
        } else if (a == b || b == c || a == c) {
            return 'Isosceles';
        } else {
            return 'Scalene';
        }
    } else {
        return 'Not a valid triangle.';
    }
}

console.log(checkTriangle(2, 3, 4))

// Exercise 5: Data Plan Status

function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }

    console.log(`${day} day(s) used, ${remainingDays} days(s) remaining.
    Average projected use: ${projectedAvg.toFixed(2)} GB/day.
    You are ${statusMsg} your averate daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, you'll end up using ${
        planLimit - (usage + projectedUsage)
    } GB from your data limit. 
    To stay below your data plan, use no more than ${(
        remainingData / remainingDays
    ).toFixed(2)} GB/day.`);
}

dataUsageFeedback(50, 10, 25);