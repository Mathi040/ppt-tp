const piedra = new URL("../assets/piedra.svg", import.meta.url).toString();
const papel = new URL("../assets/papel.svg", import.meta.url).toString();
const tijera = new URL("../assets/tijera.svg", import.meta.url).toString();

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
                    <img src="${piedra}"></img >
                    `
                    break;
                case "papel":
                    this.innerHTML = `
                    <img src="${papel}"></img >
                    `
                    break;
                case "tijera":
                    this.innerHTML = `
                    <img src="${tijera}"></img >
                    `
                    break;
                default:
                    break;
            }
        }
    }

    customElements.define("c-img", cTests)
}