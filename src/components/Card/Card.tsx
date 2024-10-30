import React from "react";
import styles from "./Card.module.scss";
import cardBack from "../../assets/cards/back.png";

interface CardProps {
  cardIndex?: number;
  suit: string;
  rank: string;
  image: string;
  isFaceUp: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  cardIndex = 0,
  suit,
  rank,
  image,
  isFaceUp,
  onClick,
}) => {
  const CARD_MARGIN = 15;

  const zIndex = cardIndex || "";
  const top = cardIndex * CARD_MARGIN;

  return (
    <div className={styles.card} onClick={onClick} style={{ zIndex, top }}>
      <img
        className={styles.card__image}
        src={isFaceUp ? image : cardBack}
        alt={`${rank} of ${suit}`}
      />
    </div>
  );
};

export default Card;
