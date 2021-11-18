let data = new Date() 

let mes = data.getMonth() + 1
let dia = data.getDate()
let main = document.querySelector("main")

//22/12 a 21/03 - Verão; 22/03 a 21/06 - Outono; 22/06 a 21/09 - Inverno; 22/09 a 21/12 - Primavera.

if((mes === 12 && dia > 21)||mes === 1 || mes === 2 || (mes === 3 && dia <= 21) ){
   
    let p = document.createElement("p")
    p.innerText = "É verão, não esqueça o protetor solar"
    main.appendChild(p)
   
    let img = document.createElement("img")
    img.setAttribute("src", "images/verao.jpg")
    main.appendChild(img)


}

if((mes === 3 && dia > 21) || mes ===4 || mes ===5 ||(mes === 6 && dia <= 21 )){
    let p = document.createElement("p")
    p.innerText = "É Outono, Não esqueça de tirar as folha do quintal"
    main.appendChild(p)
   
    let img = document.createElement("img")
    img.setAttribute("src","images/outono.png")
    main.appendChild(img)
}

if((mes === 6 && dia > 21) || mes === 7 || mes === 8 ||(mes === 9 && dia <= 21 )){
    let p = document.createElement("p")
    p.innerText = "É inverno, saia agasalhado"
    main.appendChild(p)
   
    let img = document.createElement("img")
    img.setAttribute("src","images/inverno.png")
    main.appendChild(img)
}
if((mes === 9 && dia > 21) || mes === 10 || mes === 11 ||(mes === 12 && dia <= 21 )){
    let p = document.createElement("p")
    p.innerText = "É primaveeeera, eu te aaaamo"
    main.appendChild(p)
   
    let img = document.createElement("img")
    img.setAttribute("src","images/primavera.png")
    main.appendChild(img)
}