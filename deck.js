const SUITS = ['♠', '♥', '♦', '♣'];
const VALUES = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  //frequently gonna need to get length of card so create getter function
  get numberOfCards() {
    return this.cards.length;
  }

  pop() {
    //grab the top card
    return this.cards.shift();
  }

  push(card) {
    //add card at the end of array
    this.cards.push(card);
  }

  shuffle() {
    //loop and flip w other cards inside array
    //go from back to the front
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      //this will give a number between 0 to current index
      //ex: i = 30, the newIndex will be between 0 to 30
      const newIndex = Math.floor(Math.random() * (i + 1));
      //swap cards
      [this.cards[newIndex], this.cards[i]] = [
        this.cards[i],
        this.cards[newIndex],
      ];
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
    return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red';
  }

  getHTML() {
    const cardDiv = document.createElement('div');
    cardDiv.innerText = this.suit;
    cardDiv.classList.add('card', this.color);
    cardDiv.dataset.value = `${this.value} ${this.suit}`;
    return cardDiv;
  }
}

//flatMap same as Map but it takes all of the arrays like [[1,2],[3,4]]
//and condenses to flat array [1,2,3,4]

function freshDeck() {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
}
