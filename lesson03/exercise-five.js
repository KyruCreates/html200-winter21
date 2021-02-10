// Create an array with two arrays inside of it
//    The first is the four suits of cards
//    The second is the name of each card "ace", "one", ... "king"
// Console log them in order
// let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
// let names = ['ace', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
// let cards = [names, suits];

// Codealong from class
const cardArr = [['hearts', 'diamonds', 'spades', 'clubs'], ['ace', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']];
for (let i = 0; i < cardArr[0].length; i++) {
  for (let j = 0; j < cardArr[1].length; j++) {
    console.log(cardArr[1][j] + ' of ' + cardArr[0][i]);
  }
}
