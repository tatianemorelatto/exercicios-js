function verificar() {
    let resp = window.document.querySelector('section#res')
    let num = Number(window.prompt('Digite um número:'))
    resp.innerHTML = `<br>O número ${num} é `
    if (num % 2 == 0) {
        resp.innerHTML += `<strong style = 'color:red;'>PAR</strong>`
    } else {
        resp.innerHTML += `<strong style = 'color:green'>IMPAR</strong>`
    }
}