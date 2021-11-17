const data = new Date()
const p = document.getElementById("texto")
const hora = data.getHours()
const min = data.getMinutes()

function mostraHora(){
    const data = new Date()
    let hora = data.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})

    p.innerText = `O horário atual é: ${hora}`
}
 setInterval(mostraHora, 1000)