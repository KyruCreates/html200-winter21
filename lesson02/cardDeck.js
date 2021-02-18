// Lesson 02 Assignment 5 - Bonus
// Write a program that prints out the values of a deck of cards.

// creates a standard 52-card deck
function deckBuilder() {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cards = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const value = values[j];
      const suit = suits[i];
      // pushes combined data into the cards array
      cards.push({value, suit});
    }
  }
  return cards;
}

const cards = deckBuilder();
randomCard(cards);

// choose a random card from the cards array
function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  // display the random card value and card suit
  console.log(cardValue + " of " + cardSuit);
}
