function maior() {
    let result = window.document.querySelector('section#res')
    let n1 = Number(window.prompt('Digite um número: '))
    let n2 = Number(window.prompt('Digite outro número: '))
    result.innerHTML = `<p><hr>`
    if (n1 > n2) {
        result.innerHTML += `<br>Análisando os números <strong><mark>${n1}</mark></strong> e <mark><strong>${n2}</mark></strong> o maior entre eles é <strong><mark>${n1}</strong></mark>`
    } else if (n2 > n1) {
        result.innerHTML += `<br>Análisando os números <strong><mark>${n1}</mark></strong> e <mark><strong>${n2}</mark></strong> o maior entre eles é <strong><mark>${n2}</strong></mark>`
    } else {
        result.innerHTML += `<br>Análisando os números <strong><mark>${n1}</mark></strong> e <mark><strong>${n2}</mark></strong>, ambos são <strong><mark>iguais.</strong></mark>`

    }




}