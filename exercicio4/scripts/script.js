const data = new Date()
const p = document.getElementById("texto")
const hora = data.getHours()
const min = data.getMinutes()
function mostraHora(){
    p.innerText = `Hora de acesso: ${hora}:${min}`
}