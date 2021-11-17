function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)

    let res = document.querySelector('section#resp')
    res.innerHTML = `Acabei de pensar no número: <mark>${num}</mark>`
}

function limpar() {
    let res = document.querySelector('section#resp')
    res.innerHTML = null
}