const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
]

// Use a dedicated Card class
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

// Create a Deck class 
class Deck {
    constructor() {
        this.cards = this.generateCards()
    }
    // Create a method on the Deck class that dynamically generates each card object
    generateCards() {
        return SUITS.flatMap(suit => {
            return VALUES.map(value => new Card(suit, value))
        })
    }

    get numberOfCards() {
        return this.cards.length
    }
    // create a method to select a random card object 
    randomCard() {
        return this.cards[Math.floor(Math.random() * this.cards.length)]
    }
}

class Player extends Deck {
    constructor(cards) {
        super(cards)
        this.cards = cards
    }
}

// card objects can be held inside an array 
let playingDeck = new Deck()

const deckMidpoint = Math.ceil(playingDeck.numberOfCards / 2)

// Player and Computer decks
let player = new Player(playingDeck.cards.slice(0, deckMidpoint));
let computer = new Player(playingDeck.cards.slice(deckMidpoint, playingDeck.numberOfCards));

function compareCards() {
    // get random card from each deck and compare their values
    const card1 = player.randomCard();
    const card2 = computer.randomCard();

    // player wins
    if (card1.value > card2.value) {
        return `${card1.value} beats ${card2.value}, player wins!`
    }
    // computer wins
    if (card2.value > card1.value) {
        return `${card2.value} beats ${card1.value}, computer wins!`
    }

    // tie
    else {
        return `${card2.value} and ${card1.value} are equal value, Tie!`
    }
}

console.log(player.cards.length)