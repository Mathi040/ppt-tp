export function cScore() {

    class customScore extends HTMLElement {
        shadow: ShadowRoot
        constructor() {
            super()
            this.shadow = this.attachShadow({ mode: "open" })
        }

        connectedCallback() {
            let style = document.createElement("style")
            let div = document.createElement("div")
            let title = document.createElement("c-text")
            let miPuntaje = document.createElement("c-text")
            let cpuPuntaje = document.createElement("c-text")

            style.innerHTML = `
            *{
                box-sizing: border-box;
            }
            div {
                width: 259px;
                height: 217px;
                border-radius: 10px;
                background-color: white;
                border: 10px solid black;
                }
                c-text[type="h3"] {
                    text-align: center;
            }

            c-text[type="h3"] {
                text-align: center;
                margin: 0;
            }
                
            c-text[type="h4"] {
                text-align: right;
                margin: 0 50px 0 0;
            }
            `

            title.setAttribute("type", "h3")
            miPuntaje.setAttribute("type", "h4")
            cpuPuntaje.setAttribute("type", "h4")
            title.setAttribute("margin", "0")
            miPuntaje.setAttribute("margin", "0 10px 0 0")
            cpuPuntaje.setAttribute("margin", "0 10px 0 0")

            title.textContent = "Score"
            miPuntaje.textContent = `Vos: X`
            cpuPuntaje.textContent = `Maquina: X`

            div.appendChild(title)
            div.appendChild(miPuntaje)
            div.appendChild(cpuPuntaje)

            this.shadow.appendChild(style)
            this.shadow.appendChild(div)
        }
    }

    customElements.define("c-score", customScore)
}