// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let valorEntrada = document.getElementById('amigo');

valorEntrada.addEventListener("keyup", function(event){
    if (event.key === 'Enter') {
        event.preventDefault();
        agregarAmigo();
    }});

function agregarAmigo() {
    let nombre = obtenerElementoPorID('amigo');
    if (verificarCampoVacio(nombre)) {
        alert('El campo no puede estar vacío');
    } else if (verificarEntradaNumerica(nombre)){
        alert('El campo no puede ser numérico');
    } else if (verificarNombreDuplicado(nombre)) {
        alert('El amigo ya fue agregado');
    
    } else if (verificarEspaciosEnBlanco(nombre)) {
        alert('El campo no puede ser solo espacios en blanco');
    }
    else {
        amigos.push(nombre);
        agregarListaLi(nombre, 'listaAmigos');
    }
    limpiarCampoEntrada('amigo');
    valorEntrada.focus();
}


function obtenerElementoPorID(id){
    return document.getElementById(id).value;
}

function verificarCampoVacio(valorDeEntrada){
    return valorDeEntrada === '';
}

function verificarEntradaNumerica(valorDeEntrada){
    const numeroRegex = /^-?\d+(\.\d+)?$/; // Expresión regular para verificar si es un número incluidos negativos
    return numeroRegex.test(valorDeEntrada);
}

function verificarNombreDuplicado(valorDeEntrada){
    let amigosMinuscula = amigos.map(amigo => amigo.toLowerCase());
    return amigosMinuscula.includes(valorDeEntrada.toLowerCase());
}

function verificarEspaciosEnBlanco(valorDeEntrada){
    return valorDeEntrada.trim().length === 0;
}

function agregarListaLi(texto, listID){
    let listaLi = document.getElementById(listID);
    listaLi.innerHTML += "<li>" + texto + "</li>"; 
}

function limpiarCampoEntrada(id){
    document.getElementById(id).value = '';
}
function limpiarListaLi(id){
    document.getElementById(id).innerHTML = '';
}

function sortearAmigo(){
    let cantidadAmigos = amigos.length;

    if (cantidadAmigos > 0) {
        let amigoSeleccionado = Math.floor(Math.random() * cantidadAmigos);
        let amigo = amigos[amigoSeleccionado];
        limpiarCampoEntrada('amigo');
        limpiarListaLi('listaAmigos')
        agregarListaLi(`El amigo secreto sorteado es: ${amigo}`, 'resultado');
        removerAmigoDeArray(amigo);    

    } else {
        alert('No hay amigos para sortear');
    }

}

function agregarAnoFooter(){
    let ano = new Date().getFullYear();
    document.getElementById('footer-banner').innerHTML += ' Copyright ' + ano;
}

function removerAmigoDeArray(nombreAmigo){
    amigos = amigos.filter(amigo => amigo !== nombreAmigo);
}

agregarAnoFooter();

