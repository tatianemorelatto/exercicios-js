function iniciar() {
    let agora = new Date
    let ano = agora.getFullYear()
    let resp = document.getElementById('res')
    let anonasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - anonasc

    resp.innerHTML = `Quem nasceu em ${anonasc} vai completar <strong>${idade}</strong> anos em ${ano}.`


}