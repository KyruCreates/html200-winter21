// Lesson 02 Assignment 4 - Bonus
// Declare a first name, a last name, an age and a variable that is 16. Your program should compare the driver's age with the driving age. If they are old enough to drive it should console log the first name and last name can drive and how long they've driven. If they are too young, log a countdown from 5.
const firstName = prompt("First Name: ");
const lastName = prompt("Last Name: ");
const age = parseFloat(prompt("Age: "));
const drivingAge = 16;
let driving;
if (age >= drivingAge) {
  driving = age - drivingAge;
  console.log(`${firstName} ${lastName} can drive. Driving for ${driving} years.`);
} else {
  for (var i = 5; i >= 0; i--) {
    console.log(i);
  }
}
