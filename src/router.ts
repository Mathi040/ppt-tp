import { welcomePage } from "./pages/welcomePage"
import { startPage } from "./pages/startPage"
import { gamePage } from "./pages/gamePage"
import { resultado } from "./pages/resultado"
import { juego } from "./pages/gamePage"

const routes = [
    {
        route: /\/welcome$/,
        handler: welcomePage
    },
    {
        route: /\/start$/,
        handler: startPage
    },
    {
        route: /\/game$/,
        handler: gamePage
    },
    {
        route: /\/resultado$/,
        handler: resultado
    }
]


export function router(container: Element) {
    const foundRoute = routes.some(r => r.route.test(location.pathname));

    if (!foundRoute) {
        goTo("/welcome")
        console.log(123);
    } else {
        goTo(location.pathname)
    }

    window.onpopstate = () => {
        handleRouter(location.pathname)

    }

    function handleRouter(path: string) {
        for (const route of routes) {
            if (route.route.test(path)) {
                const div = route.handler(goTo);
                if (container.firstElementChild) {
                    container.innerHTML = ""
                }
                container.appendChild(div)
            }


            if (route.route.test("/game") && path == "/game") {
                juego(goTo);
            }
        }
    }
    function goTo(path: string) {
        history.pushState({}, "", path)
        handleRouter(path)
    }

}