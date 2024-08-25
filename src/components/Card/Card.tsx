import React from "react";
import styles from "./Card.module.scss";
import cardBack from "../../assets/cards/back.png";

interface CardProps {
  suit: string;
  rank: string;
  image: string;
  isFaceUp: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  suit,
  rank,
  image,
  isFaceUp,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img
        className={styles.card__image}
        src={isFaceUp ? image : cardBack}
        alt={`${rank} of ${suit}`}
      />
    </div>
  );
};

export default Card;
