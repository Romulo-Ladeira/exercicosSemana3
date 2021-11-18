const tarefa = document.getElementById("novo-item")
const btnAdd = document.getElementById("bntAdd")
const itensLista = document.getElementById("itens-lista")
const lista = document.getElementById("lista")

btnAdd.addEventListener('click',event => {
    if(tarefa.value === ""){
        window.alert("Por favor adicione algum texto")
    }else{
        let item = document.createElement('option')
        item.innerText = tarefa.value

        itensLista.appendChild(item)
    }
    
    localStorage.setItem('lista', lista.innerHTML)
    
    tarefa.value= ''
})
function carregaLista(){
    lista.innerHTML = localStorage.getItem('lista')
}


