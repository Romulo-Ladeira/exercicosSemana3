const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const soma = document.getElementById("btnSoma")
const subtracao = document.getElementById("btnSubtracao")
const multiplicacao = document.getElementById("btnMultiplicacao")
const divisao = document.getElementById("btnDivisao")

soma.addEventListener("click", event =>{
   valorN1 = Number(n1.value)
   valorN2 = Number(n2.value)
   document.getElementById("resultado").value = valorN1 + valorN2
})
subtracao.addEventListener("click", event =>{
   valorN1 = Number(n1.value)
   valorN2 = Number(n2.value)
   document.getElementById("resultado").value = valorN1 - valorN2
})
multiplicacao.addEventListener("click", event =>{
   valorN1 = Number(n1.value)
   ValorN2 = Number(n2.value)
   document.getElementById("resultado").value = valorN1 * valorN2
})
divisao.addEventListener("click", event =>{
   valorN1 = Number(n1.value)
   ValorN2 = Number(n2.value)
   document.getElementById("resultado").value = valorN1 / valorN2
})
