import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { createWinningShuffle, dealCards } from "../../utils/deck";
import styles from "./Main.module.scss";
import ControlButtons from "../ControlButtons/ControlButtons";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { updateGameState } from "../../entities/game/model/gameSlice";
import { CardType } from "../../entities/game/types/game";

const Main = () => {
  const dispatch = useAppDispatch();

  const { deck, columns } = useAppSelector((state) => state.game);

  useEffect(() => {
    const newDeck = createWinningShuffle();
    dispatch(updateGameState({ deck: newDeck }));

    const newColumns = dealCards(newDeck);
    dispatch(updateGameState({ columns: newColumns }));
  }, [dispatch]);

  useEffect(() => {
    console.log(deck);
    console.log(columns);
  }, [deck, columns]);

  const handleCardClick = (stackIndex: number, cardIndex: number) => {
    console.log(`Clicked card ${cardIndex} in stack ${stackIndex}`);
  };

  return (
    <main className={styles.main}>
      <ControlButtons />

      <div className={styles.game__field}>
        {columns.map((stack: CardType[], stackIndex: number) => (
          <div key={stackIndex} className={styles.stack}>
            {stack.map((card: CardType, cardIndex: number) => (
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

      <div>
        {/* {deck.map((card: Card, index: number) => (
          <Card
            key={index}
            suit={card.suit}
            rank={card.rank}
            image={card.image}
            isFaceUp={card.isFaceUp}
            onClick={() => console.log(`${card.rank} of ${card.suit}`)}
          />
        ))} */}
      </div>
    </main>
  );
};

export default Main;
