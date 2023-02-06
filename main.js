// Assign race numbers randomly
let raceNumber = Math.floor(Math.random() * 1000);

// Create a boolean variable to check whether a runner registered early or not
const early = true;

// Create variable for runner's age
let age = 20;

// Create control flow statement that checks whether the runner is an adult and registered early, add 1000 to raceNumber if true
if (early == true && age > 18) {
  raceNumber += 1000;
}

// Create another control flow statement that checks age and registration time
if (early == true && age > 18) {
  console.log(`Number ${raceNumber}, you will race at 9:30am.`);
} else if (early == false && age > 18) {
  console.log(`Number ${raceNumber}, you will race at 11:00am.`);
}

// Create another control flow for those that are under 18 years old
if (age < 18) {
  console.log(`Number ${raceNumber}, you will race at 12:30pm.`);
}
