import { BrowserRouter, Route, Routes } from "react-router-dom";

import RulesPage from "../pages/Rules/RulesPage";
import GamePage from "../pages/Game/GamePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RulesPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
