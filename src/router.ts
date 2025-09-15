const routes = [

    {

    },
    {

    },
    {

    }
]


export function router() {
    function goTo(path: string) {
        history.pushState({}, "", path)
        handleRouter(path)
    }

    function handleRouter(path: string) {

    }

}