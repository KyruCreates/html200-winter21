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
