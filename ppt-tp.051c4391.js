const e=new URL(import.meta.resolve("av9qO")).toString(),t=new URL(import.meta.resolve("jCRxP")).toString(),n=new URL(import.meta.resolve("2GUiF")).toString();var i={};new URL(i=import.meta.resolve("iR1nw")).toString();var c={};new URL(c=import.meta.resolve("armOJ")).toString();const o=new URL(i).toString(),r=new URL(c).toString(),a={data:{currentGame:{miEleccion:"",cpuEleccion:""},score:{miPuntaje:0,cpuPuntaje:0}},getState:()=>a.data,setScore(e){a.data.score=e,localStorage.setItem("score",JSON.stringify(e))},setCurrent(e){a.data.currentGame=e},listeners:[],subscribe(e){a.listeners.push(e)}},s=[{regExp:/\/welcome$/,handler:function(e){let t=document.createElement("div");return t.classList.add("content"),t.innerHTML=`
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
    `,setTimeout(()=>{let t=document.getElementById("button");t?.addEventListener("click",()=>{e("/start")})},0),t}},{regExp:/\/start$/,handler:function(e){let t=document.createElement("div");return t.classList.add("content"),t.innerHTML=`
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
            >Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen
            los 3 segundos.</c-text
          >
        </div>
        <c-button id="button">Jugar!</c-button>
        <div class="icons">
          <c-img type="piedra"></c-img>
          <c-img type="papel"></c-img>
          <c-img type="tijera"></c-img>
        </div>
      
    `,setTimeout(()=>{let t=document.getElementById("button");t?.addEventListener("click",()=>{e("/game")})},0),t}},{regExp:/\/game$/,handler:function(){let e=document.createElement("div");return e.classList.add("content"),e.innerHTML=`
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


        <div class="timer">Eleg\xed!</div>
        <div class="img">
          <c-img type="piedra" class="elegir"></c-img>
          <c-img type="papel" class="elegir"></c-img>
          <c-img type="tijera" class="elegir"></c-img>
        </div>
    `,e}},{regExp:/\/resultado$/,handler:function(e){let t,n,i=document.createElement("div");i.classList.add("content");let c=function(){let e=a.getState().currentGame.miEleccion,t=a.getState().currentGame.cpuEleccion;return["tijera"==e&&"papel"==t,"papel"==e&&"piedra"==t,"piedra"==e&&"tijera"==t].includes(!0)}();return console.log(c),c?(t="ganaste",n="rgba(0, 255, 0, 0.3)"):(t="perdiste",n="rgba(255, 0, 0, 0.3)"),i.innerHTML=`
        <style>
            .content {
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
                position: absolute;
            }

            .main {
            background-color: ${n}}
        </style>

        <c-resultado type="${t}"></c-resultado>
        <c-score type="${c}"></c-score>
        <c-button id="button">Volver a jugar</c-button>
    `,setTimeout(()=>{let t=document.getElementById("button");t?.addEventListener("click",()=>{e("/game")})},0),i}}];function l(e){window.history.pushState({},"",e),d(e)}function d(e){let t=s.find(t=>t.regExp.test(e));if(t){let e=document.getElementById("main");e&&(e.innerHTML="",e.appendChild(t.handler(l)))}else console.warn(`${e} no  fue encontrado`)}!function(){class i extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){let e,t=document.createElement("style"),n=this.getAttribute("type"),i=this.getAttribute("margin"),c=this.getAttribute("color"),o=this.textContent;switch(c&&(e.style.color=c),n){case"h1":(e=document.createElement("h1")).textContent=o,e.style.margin=`${i}`,t.innerHTML=`
                        h1 {
                            font-weight: 600;
                            font-size: 80px
                        }
                    `;break;case"h2":(e=document.createElement("h2")).textContent=o,e.style.margin=`${i}`,t.innerHTML=`
                        h2 {
                            font-weight: 500;
                            font-size: 40px
                        }
                    `;break;case"h3":(e=document.createElement("h3")).textContent=o,e.style.margin=`${i}`,t.innerHTML=`
                        h3 {
                            font-weight: 200;
                            font-size: 55px
                        }
                    `;break;case"h4":(e=document.createElement("h4")).textContent=o,e.style.margin=`${i}`,t.innerHTML=`
                        h4 {
                            font-weight: 200;
                            font-size: 45px
                        }
                    `}e&&(e.className=this.className,this.innerHTML="",this.appendChild(t),this.appendChild(e))}}customElements.define("c-text",i);class c extends HTMLElement{constructor(){super()}connectedCallback(){switch(this.getAttribute("type")){case"piedra":this.innerHTML=`
                    <img src="${e}" style="width: 100%" ></img >
                    `;break;case"papel":this.innerHTML=`
                    <img src="${t}" style="width: 100%" ></img >
                    `;break;case"tijera":this.innerHTML=`
                    <img src="${n}" style="width: 100%" ></img >
                    `}}}customElements.define("c-img",c);class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=document.createElement("button"),t=document.createElement("style");t.innerHTML=`
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

            button:hover {
                background-color: #3c50b9ff;
                color: #b4fcfcff;
                border-color: #445bcaff;
            }

            button:active {
            background-color: #022cfaff;
            border-color: #1f3bc7ff;
            }
            `,e.textContent=this.textContent,this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("c-button",s);class l extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=document.createElement("div"),t=document.createElement("img"),n=document.createElement("c-text"),i=document.createElement("style"),c=this.getAttribute("type");"ganaste"==c?(t.src=o,n.textContent="Ganaste"):"perdiste"==c?(t.src=r,n.textContent="Perdiste"):t.src="err",n.setAttribute("type","h3"),i.innerHTML=`
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
                `,e.appendChild(t),e.appendChild(n),this.shadow.appendChild(i),this.shadow.appendChild(e)}}customElements.define("c-resultado",l);class m extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style"),t=document.createElement("div"),n=document.createElement("c-text"),i=document.createElement("c-text"),c=document.createElement("c-text"),o=this.getAttribute("type"),r=JSON.parse(localStorage.getItem("score")),s=r.miPuntaje,l=r.cpuPuntaje;"true"==o?s++:l++;let d={miPuntaje:s,cpuPuntaje:l};a.setScore(d),e.innerHTML=`
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
            `,n.setAttribute("type","h3"),i.setAttribute("type","h4"),c.setAttribute("type","h4"),n.setAttribute("margin","0"),i.setAttribute("margin","0 10px 0 0"),c.setAttribute("margin","0 10px 0 0"),n.textContent="Score",i.textContent=`Vos: ${s}`,c.textContent=`Maquina: ${l}`,t.appendChild(n),t.appendChild(i),t.appendChild(c),this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("c-score",m),localStorage.getItem("score")||localStorage.setItem("score",JSON.stringify(a.getState().score)),document.querySelector(".main"),d(function(){let e=window.location.pathname,t="/ppt-tp";return(console.log(e),e.startsWith(t))?e.replace(t,"/welcome"):e}())}();
//# sourceMappingURL=ppt-tp.051c4391.js.map
