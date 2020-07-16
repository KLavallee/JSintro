const secretNumber = 4;

let stringGuess = prompt("What is your guess?");
let guess = Number(stringGuess);

if (guess === secretNumber) {
    console.log("You got it right!!");
}
else if (guess > secretNumber) {
    console.log("Your guess is too high");
}
else {
    console.log("Your guess is too low");
}