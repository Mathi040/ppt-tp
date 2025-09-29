import { customText } from "./components/c-text";
import { cImg } from "./components/c-img";
import { cButton } from "./components/c-button";
import { cResultado } from "./components/c-resultado";
import { cScore } from "./components/c-score";
import { router } from "./router";
import { state } from "./state";

(function () {

    customText();
    cImg();
    cButton();
    cResultado();
    cScore();
    const score = localStorage.getItem("score");

    if (!score) {
        localStorage.setItem("score", JSON.stringify(state.getState().score));
    }
    const main = document.querySelector(".main")
    router(main!)

}())