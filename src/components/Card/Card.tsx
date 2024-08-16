import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  suit: string;
  rank: string;
  image: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ suit, rank, image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img
        className={styles.card__image}
        src={image}
        alt={`${rank} of ${suit}`}
      />
    </div>
  );
};

export default Card;
