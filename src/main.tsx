import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/global.scss";
import "./styles/reset.scss";
import { Provider } from "react-redux";
import { store } from "./app/store.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
