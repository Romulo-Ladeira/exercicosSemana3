const data = document.getElementById("data")
const btnIdade = document.getElementById("btnIdade")
const idade = document.getElementById("idade")
let dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
const mesAtual = dataAtual.getMonth() + 1
const diaAtual = dataAtual.getDate()

btnIdade.addEventListener("click", event => {
    valorData = data.value
    const stringData = valorData.split('-') 
    const anoNascimento = Number(stringData[0])
    const mesNasciemento = Number(stringData[1])
    const diaNascimento = Number(stringData[2])

   let idadeUsuario = anoAtual - anoNascimento
   if (mesAtual < mesNasciemento){
       idadeUsuario--
   }
   
   if (mesAtual=== mesNasciemento){
       if(diaAtual < diaNascimento){
           idadeUsuario--
       }
   }

   idade.innerText = `Você tem ${idadeUsuario} anos`
})
