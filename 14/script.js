function info() {
    let data = new Date
    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${data}</mark></p>`
}