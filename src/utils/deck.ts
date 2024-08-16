import aceOfHearts from "../assets/cards/ace_of_hearts.png";
import twoOfHearts from "../assets/cards/2_of_hearts.png";
import threeOfHearts from "../assets/cards/3_of_hearts.png";
import fourOfHearts from "../assets/cards/4_of_hearts.png";
import fiveOfHearts from "../assets/cards/5_of_hearts.png";
import sixOfHearts from "../assets/cards/6_of_hearts.png";
import sevenOfHearts from "../assets/cards/7_of_hearts.png";
import eightOfHearts from "../assets/cards/8_of_hearts.png";
import nineOfHearts from "../assets/cards/9_of_hearts.png";
import tenOfHearts from "../assets/cards/10_of_hearts.png";
import jackOfHearts from "../assets/cards/jack_of_hearts.png";
import queenOfHearts from "../assets/cards/queen_of_hearts.png";
import kingOfHearts from "../assets/cards/king_of_hearts.png";

import aceOfDiamonds from "../assets/cards/ace_of_diamonds.png";
import twoOfDiamonds from "../assets/cards/2_of_diamonds.png";
import threeOfDiamonds from "../assets/cards/3_of_diamonds.png";
import fourOfDiamonds from "../assets/cards/4_of_diamonds.png";
import fiveOfDiamonds from "../assets/cards/5_of_diamonds.png";
import sixOfDiamonds from "../assets/cards/6_of_diamonds.png";
import sevenOfDiamonds from "../assets/cards/7_of_diamonds.png";
import eightOfDiamonds from "../assets/cards/8_of_diamonds.png";
import nineOfDiamonds from "../assets/cards/9_of_diamonds.png";
import tenOfDiamonds from "../assets/cards/10_of_diamonds.png";
import jackOfDiamonds from "../assets/cards/jack_of_diamonds.png";
import queenOfDiamonds from "../assets/cards/queen_of_diamonds.png";
import kingOfDiamonds from "../assets/cards/king_of_diamonds.png";

import aceOfClubs from "../assets/cards/ace_of_clubs.png";
import twoOfClubs from "../assets/cards/2_of_clubs.png";
import threeOfClubs from "../assets/cards/3_of_clubs.png";
import fourOfClubs from "../assets/cards/4_of_clubs.png";
import fiveOfClubs from "../assets/cards/5_of_clubs.png";
import sixOfClubs from "../assets/cards/6_of_clubs.png";
import sevenOfClubs from "../assets/cards/7_of_clubs.png";
import eightOfClubs from "../assets/cards/8_of_clubs.png";
import nineOfClubs from "../assets/cards/9_of_clubs.png";
import tenOfClubs from "../assets/cards/10_of_clubs.png";
import jackOfClubs from "../assets/cards/jack_of_clubs.png";
import queenOfClubs from "../assets/cards/queen_of_clubs.png";
import kingOfClubs from "../assets/cards/king_of_clubs.png";

import aceOfSpades from "../assets/cards/ace_of_spades.png";
import twoOfSpades from "../assets/cards/2_of_spades.png";
import threeOfSpades from "../assets/cards/3_of_spades.png";
import fourOfSpades from "../assets/cards/4_of_spades.png";
import fiveOfSpades from "../assets/cards/5_of_spades.png";
import sixOfSpades from "../assets/cards/6_of_spades.png";
import sevenOfSpades from "../assets/cards/7_of_spades.png";
import eightOfSpades from "../assets/cards/8_of_spades.png";
import nineOfSpades from "../assets/cards/9_of_spades.png";
import tenOfSpades from "../assets/cards/10_of_spades.png";
import jackOfSpades from "../assets/cards/jack_of_spades.png";
import queenOfSpades from "../assets/cards/queen_of_spades.png";
import kingOfSpades from "../assets/cards/king_of_spades.png";

type Suit = "hearts" | "diamonds" | "clubs" | "spades";
type Rank =
  | "ace"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "jack"
  | "queen"
  | "king";

interface Card {
  suit: Suit;
  rank: Rank;
  image: string;
}

const cardImages: Record<Suit, Record<Rank, string>> = {
  hearts: {
    ace: aceOfHearts,
    "2": twoOfHearts,
    "3": threeOfHearts,
    "4": fourOfHearts,
    "5": fiveOfHearts,
    "6": sixOfHearts,
    "7": sevenOfHearts,
    "8": eightOfHearts,
    "9": nineOfHearts,
    "10": tenOfHearts,
    jack: jackOfHearts,
    queen: queenOfHearts,
    king: kingOfHearts,
  },
  diamonds: {
    ace: aceOfDiamonds,
    "2": twoOfDiamonds,
    "3": threeOfDiamonds,
    "4": fourOfDiamonds,
    "5": fiveOfDiamonds,
    "6": sixOfDiamonds,
    "7": sevenOfDiamonds,
    "8": eightOfDiamonds,
    "9": nineOfDiamonds,
    "10": tenOfDiamonds,
    jack: jackOfDiamonds,
    queen: queenOfDiamonds,
    king: kingOfDiamonds,
  },
  clubs: {
    ace: aceOfClubs,
    "2": twoOfClubs,
    "3": threeOfClubs,
    "4": fourOfClubs,
    "5": fiveOfClubs,
    "6": sixOfClubs,
    "7": sevenOfClubs,
    "8": eightOfClubs,
    "9": nineOfClubs,
    "10": tenOfClubs,
    jack: jackOfClubs,
    queen: queenOfClubs,
    king: kingOfClubs,
  },
  spades: {
    ace: aceOfSpades,
    "2": twoOfSpades,
    "3": threeOfSpades,
    "4": fourOfSpades,
    "5": fiveOfSpades,
    "6": sixOfSpades,
    "7": sevenOfSpades,
    "8": eightOfSpades,
    "9": nineOfSpades,
    "10": tenOfSpades,
    jack: jackOfSpades,
    queen: queenOfSpades,
    king: kingOfSpades,
  },
};

export function createDeck(): Card[] {
  const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
  const ranks: Rank[] = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
  ];

  return suits.flatMap((suit) =>
    ranks.map((rank) => ({
      suit,
      rank,
      image: cardImages[suit][rank],
    }))
  );
}
