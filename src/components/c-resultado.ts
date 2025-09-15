const ganaste = new URL("../assets/ganaste.svg", import.meta.url).toString();
const perdiste = new URL("../assets/perdiste.svg", import.meta.url).toString();

export function cResultado() {
    class customResultado extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super()
            this.shadow = this.attachShadow({ mode: "open" })
        }

        connectedCallback() {
            this.render()
        }

        render() {
            let div = document.createElement("div");
            let img = document.createElement("img");
            let cText = document.createElement("c-text");
            let style = document.createElement("style")
            let type = this.getAttribute("type");

            if (type == "ganaste") {
                img.src = ganaste
                cText.textContent = "Ganaste"
            } else if (type == "perdiste") {
                img.src = perdiste
                cText.textContent = "Perdiste"
            } else {
                img.src = "err"
            }


            cText.setAttribute("type", "h3")
            style.innerHTML = `
                div {
                    position: relative;
                    width: fit-content;
                }

                c-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                }
                `

            div.appendChild(img)
            div.appendChild(cText)

            this.shadow.appendChild(style)
            this.shadow.appendChild(div)

        }

    }

    customElements.define("c-resultado", customResultado)
}