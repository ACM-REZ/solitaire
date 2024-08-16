import { useState } from "react";
import Card from "../../components/Card/Card";
import { createDeck } from "../../utils/deck";

const Main = () => {
  const [deck, setDeck] = useState(createDeck());

  return (
    <main>
      <div>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>

      <div></div>

      <div className={styles.game__field}>
        {deck.map((card, index) => (
          <Card
            key={index}
            suit={card.suit}
            rank={card.rank}
            image={card.image}
            onClick={() => console.log(`${card.rank} of ${card.suit}`)}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
