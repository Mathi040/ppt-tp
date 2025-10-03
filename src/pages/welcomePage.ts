export function welcomePage(params: any) {
  let div = document.createElement("div")
  div.classList.add("content")
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
            padding-bottom: 100px
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

            .content {
              padding-bottom: 150px
            }
        }
        </style>


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
    `

  setTimeout(() => {
    const button = document.getElementById("button")
    button?.addEventListener("click", () => {
      params("/start")
    })
  }, 0)


  return div
}