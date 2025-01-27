// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amgigos = [];

function agregarAmigo() {
    let nombre = obtenerElementoPorID('amigo');
    if (!verificarCampoVacio(nombre)) {
        amgigos.push({nombre});
        agregarLista(nombre, 'listaAmigos');
    } else {
        alert('El campo no puede estar vacío');
    }
}

function obtenerElementoPorID(id){
    return document.getElementById(id).value;
}

function verificarCampoVacio(valorDeEntrada){
    return valorDeEntrada === '';
}

function agregarLista(nombre, listID){
    let myList = document.getElementById(listID);
    myList.innerHTML += "<li>" + nombre + "</li>"; 
}