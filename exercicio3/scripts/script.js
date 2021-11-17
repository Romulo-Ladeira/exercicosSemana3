let num = document.getElementById("num")
const p = document.getElementById("texto") 
const btnParidade = document.getElementById("btnParidade")


btnParidade.addEventListener("click", event =>{
    let texto = undefined;
    let valorNum = Number(num.value)

    if(valorNum%2 === 0){
        texto = "o número é par"

    }else{
        texto = "o número é impar"
    }


    p.innerText = texto

})
