let contador = 0
let res = document.querySelector('section#result')

function contar() {
    contador++
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}