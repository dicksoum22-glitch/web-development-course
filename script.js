
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


const car = { type: "Proton", model: "Axia", color: "Blue" };
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

console.log("Score:", score, "| Passing:", isPassing, "| Can graduate:", canGraduate);


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