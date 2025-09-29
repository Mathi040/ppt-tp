export function startPage(params: Function) {
  let div = document.createElement("div")

  div.innerHTML = `
    <style>
            .content {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 50px;
            }

            .rules {
              width: 317px;
            }

            .icons {
              width: fit-content;
              display: flex;
              gap: 60px;
              position: relative;
              top: 95px;
            }
    </style>

        <div class="content">
        <div class="rules">
          <c-text type="h2"
            >Presioná jugar y elegí: piedra, papel o tijera antes de que pasen
            los 3 segundos.</c-text
          >
        </div>
        <c-button id="button">Jugar!</c-button>
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
      params("/game")
    })
  }, 0)


  return div
}