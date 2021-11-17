function calcular() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a segunda nota de ${nome}?`))
    media = (n1 + n2) / 2

    let res = window.document.getElementById('result')
    res.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong></p><hr>`
    res.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}.`
    res.innerHTML += `<p>A média final foi de ${media}.`

    if (media <= 5) {
        res.innerHTML += `<p>A mensagem que temos é: <strong style ='color:red;'>Estude um pouco mais!</strong>`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: <strong style ='color:red;'>Meus Parabéns!!</strong>`
    }

}