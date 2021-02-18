// Write a simple webpage opens an alert that takes a number from the user and squares it and opens an alert with the result. Create an HTML page and write your javascript in a script tag, or create a JavaScript file and link to it from the HTML page.
// You must use a function and an event handler.
function numSq() {
  let num = prompt("Pick a number");
  alert("Number has been doubled and is now " + Number(num*num));
}

// Part 2 - Take two numbers from the user and return the result of multiplying them together.
function numMultiply() {
  let num1 = prompt("Pick the first number");
  let num2 = prompt("Pick the second number");
  alert("The result is " + Number(num1*num2));
}

// Class Codealong
/* const num = prompt("Enter a number: ");
   const result = Number(num) * Number(num);
   alert(result);

   const num = prompt("Enter a number: ");
   const num2 = prompt("Enter another number: ");
   const result = Number(num) * Number(num2);
   alert(result);

*/
