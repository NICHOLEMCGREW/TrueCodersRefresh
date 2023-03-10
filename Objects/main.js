// Arrays

let hobbit = {
    firstName: "Frodo",
    lastName: "Baggins",
    age: 51,
};

console.log(hobbit.firstName);

 // Methods

 hobbit.run = function() {
    console.log("Hobbit is running...");
 };

 hobbit.run();

 const player1 = {
    name: "Ben",
    marker: "X",
 };

 const player2 = {
    name: "John",
    marker: "O",
 };

 console.log(`${player1.name} plays ${player1.marker}`);

 function speak(msg) {
    console.log(`${this.name} says, "${msg}".`);
 }

 console.log(hobbit.speak = speak);

 let car = {
    make: "Ford",
    model: "Mustang",
    type: "Coup",
    color: "Space Gray",
 };

 car.drive = function() {
    console.log(`${this.make} ${this.model} is now in drive...`);
 }

 car.drive()