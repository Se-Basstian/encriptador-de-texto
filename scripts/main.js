
function encriptar() {
    let texto = document.getElementById("cuadro_entrada").value;

    cambiarInterfaz();

    let texto_salida = document.getElementById('cuadro_salida');

    texto_salida.innerHTML = texto;
}

function ocultarPorID(identificador) {
    document.getElementById(identificador).setAttribute('hidden', 'true');
}

function mostarPorID(identificador){
    document.getElementById(identificador).removeAttribute('hidden')
}

function limparValorElemeno(identificador) {
    document.getElementById(identificador).innerHTML = '';
}

function cambiarInterfaz() {
    ocultarPorID("muñeco");
    ocultarPorID("aviso_salida_titulo");
    ocultarPorID("aviso_salida_parrafo");
    mostarPorID("btn_copiar");
    mostarPorID("cuadro_salida");
}