export function customText() {
    class cText extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.render()
        }

        render() {
            let style = document.createElement("style")
            let indicator = this.getAttribute("type");
            let mrg = this.getAttribute("margin")
            let txtContent = this.textContent;
            let element;
            switch (indicator) {
                case "h1":
                    element = document.createElement("h1");
                    element.textContent = txtContent;
                    element.style.margin = `${mrg}`;
                    style.innerHTML = `
                        h1 {
                            font-weight: 700;
                            font-size: 80px
                        }
                    `
                    break;
                case "h2":
                    element = document.createElement("h2");
                    element.textContent = txtContent;
                    element.style.margin = `${mrg}`;
                    style.innerHTML = `
                        h2 {
                            font-weight: 600;
                            font-size: 40px
                        }
                    `
                    break;
                case "h3":
                    element = document.createElement("h3");
                    element.textContent = txtContent;
                    element.style.margin = `${mrg}`;
                    style.innerHTML = `
                        h3 {
                            font-weight: 400;
                            font-size: 55px
                        }
                    `
                    break;
                case "h4":
                    element = document.createElement("h4");
                    element.textContent = txtContent;
                    element.style.margin = `${mrg}`;
                    style.innerHTML = `
                        h4 {
                            font-weight: 400;
                            font-size: 45px
                        }
                    `
                    break;
                default:
                    break;
            }

            if (element) {
                element.className = this.className;
                this.innerHTML = '';
                this.appendChild(style)
                this.appendChild(element)
            }
        }
    }

    customElements.define("c-text", cText)
}