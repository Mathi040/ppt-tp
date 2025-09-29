export function welcomePage(params: any) {
    let div = document.createElement("div")

    div.innerHTML = `
        <style>
            c-text {
            color: #009048;
        }

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 50px;
        }

        .icons {
            width: fit-content;
            display: flex;
            gap: 60px;
            position: relative;
            top: 80px;
        }
        </style>


        <div class="content">
        <div class="title">
          <c-text type="h1" margin="0">Piedra</c-text>
          <c-text type="h1" margin="0">Papel</c-text>
          <c-text type="h1" margin="0">Tijera</c-text>
        </div>
        <c-button id="button">Empezar</c-button>
        <div class="icons">
          <c-img type="piedra"></c-img>
          <c-img type="papel"></c-img>
          <c-img type="tijera"></c-img>
        </div>
      </div>
    `

    setTimeout(() => {
        const button = document.getElementById("button")
        button?.addEventListener("click", () => {
            params("/start")
        })
    }, 0)


    return div
}