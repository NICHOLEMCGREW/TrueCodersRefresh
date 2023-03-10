// for loop

for (let bottlesOnTheWall = 99; bottlesOnTheWall >= 0; bottlesOnTheWall--) {
    if (bottlesOnTheWall) {
        console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
    } else {
        console.log(`No more bottles of milk on the wall~`);
    }
}

// while loop

let theBottlesOnWall = 99;

while (theBottlesOnWall >= 0) {
    if (theBottlesOnWall) {
        console.log(`${theBottlesOnWall} bottles of milk on the wall...`);
    } else {
        console.log(`No more bottles of milk on the wall!`);
    }
    theBottlesOnWall--;
}


// for loop with prompt

let base = parseInt(
    prompt("What number do you want to see a multiplication table of?")
);

let range = parseInt(prompt("What number should I stop at?"));

if (!base) {
    base = 1;
}

for (let i = 1; i <= range; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
}

let z = 1;

while (z <= range) {
    console.log(`${base} x ${z} = ${base * z}`);
    z++;
}

// Exercise 1: Ignore Even

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}


// Exercise 2: FIZZBUZZ

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 == 0) {
        console.log('FIZZ');
    } else if (i % 5 == 0) {
        console.log('BUZZ');
    }
    console.log(i);
}

// Exercise 3: Repeat with While and Do/While

let x = 1;

while (x <= 100) {
    if (x % 2 == 1) {
        console.log(x);
    }
    x++;
}

let i = 1;

do {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++
} while (i <= 100)

// Exercise 4: Find Value

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i <= n; i++) {
    if (i = value) { break; }
   console.log('Found value!')
    } 
        console.log('did not find value');


// Exercise 5: Customized FIZZBUZZ

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n2 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n2; i++) {
    if (fizzDivisor) {
        console.log('FIZZ');
    } if (buzzDivisor) {
        console.log('BUZZ');
    }
    console.log(i)
}