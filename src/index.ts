import { initRouter } from "./router";
import { state } from "./state";
import "./components/button"
import "./components/input"
import "./components/results"
import "./components/countdown"

(function () {
  if (localStorage["game-state"]) {
    state.init();
  }

  const root = document.querySelector(".root");
  initRouter(root);
})();
