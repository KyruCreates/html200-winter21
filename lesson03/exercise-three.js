// Create an array that has at least 5 strings
// Use a for loop to console log all of the elements plus the index and a comma
let arr = ['aglio e olio', 'bolognese', 'spaghetti', 'ravioli', 'fettuccine alfredo'];
for(let i = 0; i < arr.length; i++) {
  console.log(arr.indexOf(arr[i]) + ', ' + arr[i]);
  // alternatively, you can also have
  // console.log(i+1, arr[i]); as this should be ordered 1, 2, 3, etc.
}
