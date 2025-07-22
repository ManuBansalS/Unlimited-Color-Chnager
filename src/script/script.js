function change() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++){
        const col = Math.floor(Math.random()*16)
        color += hex[col]
    }
    return color
}

const start = document.getElementById('start')
const stop = document.getElementById('stop')
const body  = document.getElementById('body')
let intervalId = null

start.addEventListener('click', (e) => {
    e.preventDefault()
    if(intervalId === null){
        intervalId = setInterval(() => {
            body.style.backgroundColor = change()
        }, 500)

    }
})

stop.addEventListener('click', (e) => {
    e.preventDefault()
    if(intervalId !== null){
        clearInterval(intervalId)
        intervalId = null
    }
})
