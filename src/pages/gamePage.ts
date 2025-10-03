import { state } from "../state"


export function gamePage() {
  let div = document.createElement("div")
  div.classList.add("content")

  div.innerHTML = `
        <style>
            .content {
              position: relative;
            }
            
            .timer {
              text-align: center;
              font-size: 150px;
            }
              
            .img {
              width: 100vw;
              display: flex;
              justify-content: space-around;
              position: relative;
              top: 220px;
            }
            
            c-img {
 j             width: 100px;
            }

            @media (min-width: 1000px) {
            body {
            overflow: hidden;
            }
            c-img {
              width: 160px;
            }
        </style>


        <div class="timer">Elegí!</div>
        <div class="img">
          <c-img type="piedra" class="elegir"></c-img>
          <c-img type="papel" class="elegir"></c-img>
          <c-img type="tijera" class="elegir"></c-img>
        </div>
    `

  return div
}


export async function juego(params: Function) {
  let timerEl = document.querySelector(".timer");
  let content = document.querySelector(".content")
  while (true) {
    if (timerEl) {
      const jugador = await eleccionJugador(timerEl)

      const maquina = eleccionCPU();

      state.setCurrent({ miEleccion: jugador as string, cpuEleccion: maquina })

      if (jugador === maquina) {
        timerEl.innerHTML = "Empate!";
        await new Promise(r => setTimeout(r, 1500));
        continue;
      }

      break;
    }
  }

  content!.innerHTML = `
  <style>
  .content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }

.eleccion {
  width: 150px;
  }
.cpu > :first-child {
    transform: scaleY(-1);
    position: relative;
    top: -20px;
  }

.jugador > :first-child {
    position: relative;
    top: -40px;
  }



  @media (min-width: 1000px) {
            .jugador > :first-child {
              top: 00px
            }
  </style>

            <c-img type="${state.getState().currentGame.cpuEleccion}" class="eleccion cpu" ></c-img>
            <c-img type="${state.getState().currentGame.miEleccion}" class="eleccion jugador"></c-img>

  `


  setTimeout(() => {
    params("/resultado")
  }, 2000)
}

function eleccionCPU() {
  const manos = ["piedra", "papel", "tijera"]
  const index = Math.floor(Math.random() * 3);
  let eleccion = manos[index];

  return eleccion
}


function eleccionJugador(timerEl: Element) {
  return new Promise((resolve) => {
    let eleccion: any = null;
    let time = 3;
    timerEl.innerHTML = "Elegi!"

    const timer = setInterval(() => {
      timerEl.innerHTML = time.toString()
      time--;
      if (time < 0) {
        clearInterval(timer)
        if (!eleccion) {
          resolve(null)
        } else {
          resolve(eleccion)
        }
      }
    }, 1000)

    const imgs = document.querySelectorAll(".elegir");

    imgs.forEach(img => {
      img.addEventListener("click", () => {
        eleccion = img.getAttribute("type");
      })
    }, { once: true })
  })
}











