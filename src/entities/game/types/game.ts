export type Suit = "hearts" | "diamonds" | "clubs" | "spades";
export type Rank =
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

export interface CardType {
  suit: Suit;
  rank: Rank;
  image: string;
  isFaceUp: boolean;
}
