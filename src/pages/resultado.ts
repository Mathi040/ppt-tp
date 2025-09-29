import { state } from "../state";


export function resultado(params: Function) {
    let div = document.createElement("div");
    div.classList.add("content");
    const gane = decisionFinal();
    let boton;
    let color;

    console.log(gane);
    if (gane) {
        boton = "ganaste";
        color = "rgba(0, 255, 0, 0.3)"
    } else {
        boton = "perdiste";
        color = "rgba(255, 0, 0, 0.3)"
    }
    div.innerHTML = `
        <style>
            .content {
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
                position: absolute;
            }

            .main {
            background-color: ${color}}
        </style>

        <c-resultado type="${boton}"></c-resultado>
        <c-score type="${gane}"></c-score>
        <c-button id="button">Volver a jugar</c-button>
    `


    setTimeout(() => {
        const button = document.getElementById("button")
        button?.addEventListener("click", () => {
            params("/game");
        })
    }, 0)

    return div;
}



function decisionFinal() {
    const jugador = state.getState().currentGame.miEleccion
    const cpu = state.getState().currentGame.cpuEleccion;

    const tijera = jugador == "tijera" && cpu == "papel";
    const papel = jugador == "papel" && cpu == "piedra";
    const piedra = jugador == "piedra" && cpu == "tijera";

    return [tijera, papel, piedra].includes(true)

}


