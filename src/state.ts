export const state = {
    data: {
        currentGame: {
            miEleccion: "",
            cpuEleccion: ""
        },
        score: {
            miPuntaje: 0,
            cpuPuntaje: 0,
        }
    },

    getState: () => {
        return state.data
    },

    setScore(newScore: { miPuntaje: number, cpuPuntaje: number }) {
        state.data.score = newScore
        localStorage.setItem("score", JSON.stringify(newScore))
    },

    setCurrent(newCurrent: { miEleccion: string, cpuEleccion: string }) {
        state.data.currentGame = newCurrent
    },

    listeners: [] as any,

    subscribe(callback: Function) {
        state.listeners.push(callback)
    }
}