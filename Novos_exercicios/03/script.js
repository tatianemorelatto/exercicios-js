function calcular() {
    let n1 = document.getElementById("n1")
    let n2 = document.getElementById("n2")
    let n3 = document.getElementById("n3")
    let resp = document.getElementById("res")

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        resp.innerHTML = window.alert('Digite um número válido!')
    } else {
        resp.innerHTML = 'Calculando..'
        let num1 = Number(n1.value)
        let num2 = Number(n2.value)
        let num3 = Number(n3.value)
        let maior = num1
        let menor = num1
        if (num2 > maior) {
            maior = num2
        }
        if (num2 < menor) {
            menor = num2
        }
        if (num3 > maior) {
            maior = num3
        }
        if (num3 < menor) {
            menor = num3
        }
        resp.innerHTML = window.alert(`O maior número digitado foi ${maior} e o menor foi ${menor}`)
    }
}