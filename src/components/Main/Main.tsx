import { useState } from "react";
import Card from "../../components/Card/Card";
import { createWinningShuffle, dealCards } from "../../utils/deck";
import styles from "./Main.module.scss";
import ControlButtons from "../ControlButtons/ControlButtons";

const Main = () => {
  const [deck, setDeck] = useState(createWinningShuffle());
  const tableau = dealCards(deck);

  const handleCardClick = (stackIndex: number, cardIndex: number) => {
    console.log(`Clicked card ${cardIndex} in stack ${stackIndex}`);
  };

  return (
    <main className={styles.main}>
      <ControlButtons />

      <div className={styles.game__field}>
        {tableau.map((stack, stackIndex) => (
          <div key={stackIndex} className={styles.stack}>
            {stack.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                suit={card.suit}
                rank={card.rank}
                image={card.image}
                isFaceUp={card.isFaceUp}
                onClick={() => handleCardClick(stackIndex, cardIndex)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* <div>
        {deck.map((card, index) => (
          <Card
            key={index}
            suit={card.suit}
            rank={card.rank}
            image={card.image}
            isFaceUp={card.isFaceUp}
            onClick={() => console.log(`${card.rank} of ${card.suit}`)}
          />
        ))}
      </div> */}
    </main>
  );
};

export default Main;
