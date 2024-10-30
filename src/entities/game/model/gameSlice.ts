import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../types/game";

interface GameState {
  deck: CardType[];
  columns: CardType[][];
  bucket: CardType[][];
  remainer: CardType[];
}

const initialState: GameState = {
  deck: [],
  columns: [],
  bucket: [],
  remainer: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateGameState: (state, action: PayloadAction<Partial<GameState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateGameState } = gameSlice.actions;
export default gameSlice.reducer;
