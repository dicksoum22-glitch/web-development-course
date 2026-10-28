let studentName = "Sidiki";
let studentAge = 23;
let isStudent = true;
const major = "Web Development";

const skills = ["HTML", "CSS", "JavaScript"];

const profile = {
    name: studentName,
    age: studentAge,
    major: major
};

console.log(studentName, studentAge, isStudent, major);
console.log(skills);
console.log(profile);


const car = {
    type: "Proton",
    model: "Axia",
    color: "Blue"
};

car.color = "Red";
car.owner = "Sidiki";


const cars = ["Proton", "Perdua", "TOGG"];

cars[0] = "Honda";
cars.push("EVT Motor");

console.log("Car:", car);
console.log("Cars:", cars);


let score = 15 + 5;
score += 10;

let isPassing = score >= 20;
let canGraduate = isStudent && isPassing;

console.log(
    "Score:",
    score,
    "| Passing:",
    isPassing,
    "| Can graduate:",
    canGraduate
);


if (score >= 25) {
    console.log("Excellent");
} else if (score >= 15) {
    console.log("Good job");
} else {
    console.log("Keep practicing");
}


for (let i = 0; i < skills.length; i++) {
    console.log("Skill:", skills[i]);
}


let count = 0;

while (count < 3) {
    console.log("While loop count:", count);
    count++;
}


for (let i = 0; i < skills.length; i++) {

    if (skills[i] === "CSS") {
        continue;
    }

    if (skills[i] === "JavaScript") {
        break;
    }

    console.log("Checking skill:", skills[i]);
}


/* =====================================================
   8. GUESSING NUMBER GAME
   ===================================================== */

/*
   This function creates a random number between 0 and 10,
   asks the player to guess the number,
   checks the answer,
   and asks if the player wants to play again.
*/

function startGuessingGame() {

    let playAgain = true;

    while (playAgain) {

        // Generate a random number between 0 and 10
        const randomNumber = Math.floor(Math.random() * 11);

        // Ask the player to guess a number
        let guess = prompt("Guess a number between 0 and 10:");

        // Check if the player wants to cancel
        if (guess === null) {
            break;
        }

        guess = Number(guess);

        // Check the player's guess
        if (guess === randomNumber) {

            alert("Yeah, you guessed it!");

        } else if (guess < randomNumber) {

            alert("Too low, try again.");

        } else {

            alert("Too high, try again.");
        }

        // Ask the player if they want to play again
        const answer = prompt("Do you want to play again? Type yes or no.");

        if (answer === null || answer.toLowerCase() !== "yes") {
            playAgain = false;
            alert("Thanks for playing!");
        }
    }
}
