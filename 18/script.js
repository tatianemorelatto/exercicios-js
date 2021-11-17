let res = document.querySelector('section#resp') // criar a variavel res, e depois mandar pra section resp usando innerHTML

let jogador = 0
let computador = 0

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // um número aleatório entre 0 e 1
    computador = min + Math.trunc(dif * aleatorio) // ele vai usar a função trunc para arredondar o número para inteiro, então nessa conta ele vai pegar a diferença que vai ser o número 99, e vai fazer VEZES o número aleatório entre 0 e 1, e depois de converter para inteiro vai somar mais 1 que é o minimo
}


function tente() {

    jogador = Number(window.prompt('Qual seu palpite?'))


    if (computador < jogador) {
        res.innerHTML += `<p> Você falou ${jogador}. Meu número é <strong> MENOR </strong></p>`

    } else
    if (computador > jogador) {
        res.innerHTML += `<p> Você falou ${jogador}.Meu número é <strong> MENOR </strong></p>`

    } else if (jogador == computador) {
        res.innerHTML += ` <p><strong> PARABÉNS! </strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p> `

    }


}