const piedra = new URL("../assets/piedra.svg", import.meta.url).toString();
const papel = new URL("../assets/papel.svg", import.meta.url).toString();
const tijera = new URL("../assets/tijera.svg", import.meta.url).toString();
const ganaste = new URL("../assets/ganaste.svg", import.meta.url).toString();
const perdiste = new URL("../assets/perdiste.svg", import.meta.url).toString();

export function cImg() {
    class cTests extends HTMLElement {
        constructor() {
            super();

        }

        connectedCallback() {
            const indicator = this.getAttribute("type");

            switch (indicator) {
                case "piedra":
                    this.innerHTML = `
                    <img src="${piedra}" style="width: 100%" ></img >
                    `
                    break;
                case "papel":
                    this.innerHTML = `
                    <img src="${papel}" style="width: 100%" ></img >
                    `
                    break;
                case "tijera":
                    this.innerHTML = `
                    <img src="${tijera}" style="width: 100%" ></img >
                    `
                    break;
                default:
                    break;
            }
        }
    }

    customElements.define("c-img", cTests)
}