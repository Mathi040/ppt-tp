export function cButton() {
    class customButton extends HTMLElement {
        shadow: ShadowRoot
        constructor() {
            super()
            this.shadow = this.attachShadow({ mode: "open" })
        }

        connectedCallback() {
            this.render()
        }

        render() {
            let button = document.createElement("button");
            let style = document.createElement("style");
            style.innerHTML = `
            button {
                min-width: 322px;
                height: 87px;
                padding: 16px 8px;
                border-radius: 10px;
                border: 10px solid #001997;
                background-color: #006cfc;
                font-size: 45px;
                color: #d8fcfc;
                line-height: 40px;
                font-family: "Odibee Sans", sans-serif;
            }

            c-button {
            margin: 500px}
            `
            button.textContent = this.textContent


            this.shadow.appendChild(button)
            this.shadow.appendChild(style)
        }
    }
    customElements.define("c-button", customButton)
}