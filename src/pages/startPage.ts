export function startPage(params: Function) {
  let div = document.createElement("div")
  div.classList.add("content")
  div.innerHTML = `
    <style>
            .content {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 50px;
              padding-bottom: 100px;
            }

            .rules {
              width: 317px;
            }

        .icons {
            width: fit-content;
            display: flex;
            gap: 60px;
            position: absolute;
            bottom: 0;
        }

        
          @media (min-width: 1000px) {
            c-img {
              width: 80px;
            }
        }
    </style>

        
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
      
    `

  setTimeout(() => {
    const button = document.getElementById("button")
    button?.addEventListener("click", () => {
      params("/game")
    })
  }, 0)


  return div
}