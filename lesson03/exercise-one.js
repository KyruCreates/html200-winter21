// Create an array with at least 5 strings
let arr = ['aglio e olio', 'bolognese', 'spaghetti', 'ravioli', 'fettuccine alfredo'];
console.log(arr);

// Add an element to the end of the array
arr.push('carbonara');
console.log(arr);

// Remove the third element
arr.splice(2, 1);
console.log(arr);

// Create a string from the elements and comma separate them
let pasta = arr.join();
console.log(pasta);
