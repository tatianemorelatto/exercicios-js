function idade() {
    let idade = document.getElementById("idade")
    let res = document.getElementById("res")

    if (idade.value.length == 0) {
        alert = ('[ERRO] Informe uma idade válida!')
    } else {
        let i = Number(idade.value)
        let maior = 21
        res.innerHTML = `Você possui ${i} anos!`
        if (i < maior) {
            res.innerHTML += `<p>Atingirá a maioridade quando completar 21 anos.`
        } else {
            res.innerHTML += `<p>Você já atingiu a maioridade!!!`
        }
    }
}