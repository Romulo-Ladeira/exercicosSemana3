const tarefa = document.getElementById("novo-item")
let btnAdd = document.getElementById("bntAdd")
const itensLista = document.getElementById("itens-lista")

btnAdd.addEventListener('click',event => {
    if(tarefa.value === ""){
        window.alert("Por favor adicione algum texto")
    }else{
        let item = document.createElement('option')
        item.innerText = tarefa.value

        itensLista.appendChild(item)
    }
    tarefa.value= ''
})
