// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amgigos = [];

function agregarAmigo() {
    let nombre = obtenerElementoPorID('amigo');
    if (!verificarCampoVacio(nombre)) {
        amgigos.push(nombre);
        agregarListaLi(nombre, 'listaAmigos');
    } else {
        alert('El campo no puede estar vacío');
    }
    limpiarCampoEntrada('amigo');
}

function obtenerElementoPorID(id){
    return document.getElementById(id).value;
}

function verificarCampoVacio(valorDeEntrada){
    return valorDeEntrada === '';
}

function agregarListaLi(texto, listID){
    let myList = document.getElementById(listID);
    myList.innerHTML += "<li>" + texto + "</li>"; 
}

function limpiarCampoEntrada(id){
    document.getElementById(id).value = '';
}
function limpiarListaLi(id){
    document.getElementById(id).innerHTML = '';
}

function sortearAmigo(){
    let cantidadAmigos = amgigos.length;

    if (cantidadAmigos > 0) {
        let amigoSeleccionado = Math.floor(Math.random() * cantidadAmigos);
        let amigo = amgigos[amigoSeleccionado];
        limpiarCampoEntrada('amigo');
        limpiarListaLi('listaAmigos')
        agregarListaLi(`El amigo secreto sorteado es: ${amigo}`, 'resultado');    

    } else {
        alert('No hay amigos para sortear');
    }

}