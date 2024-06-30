
function btn_encriptar() {
    let texto = document.getElementById("cuadro_entrada").value;

    cambiarInterfaz();

    let texto_salida = document.getElementById('cuadro_salida');

    texto_salida.innerHTML = encriptacionDeCesar(texto);
    
    document.getElementById('cuadro_entrada').value = ''; // Linea encargada de limpiar el textarea de entrada de datos.
}

function btn_desEncriptacion() {
    let texto = document.getElementById('cuadro_entrada').value;

    cambiarInterfaz();

    let texto_salida = document.getElementById('cuadro_salida');

    texto_salida.innerHTML = desEncriptacion(texto);

    document.getElementById('cuadro_entrada').value = ''; // Limpia la patalla de entrada.
}

function btn_copiar() {
    let cuadro_salir = document.getElementById('cuadro_salida').value;

    cambiarInterfaz2();

    document.getElementById('cuadro_entrada').value = cuadro_salir;


}

/**
 * Oculta un elemento html que
 * se encuntra visible.
 * @param {string} identificador 
 */
function ocultarPorID(identificador) {
    document.getElementById(identificador).setAttribute('hidden', 'true');
}

/**
 * Muestra un elemento html que
 * se encontraba oculto.
 * @param {string} identificador 
 */
function mostrarPorID(identificador){
    document.getElementById(identificador).removeAttribute('hidden')
}

/**
 * Se encargará de borrar el contenido de
 * un elemento de html.
 * @param {string} identificador 
 */
function limparValorElemeno(identificador) {
    document.getElementById(identificador).innerHTML = '';
}

/**
 * La función se encarga de ocultar y mostras
 * algunos elementos de la interfas gráfica.
 */
function cambiarInterfaz() {
    ocultarPorID("muñeco");
    ocultarPorID("aviso_salida_titulo");
    ocultarPorID("aviso_salida_parrafo");
    mostrarPorID("btn_copiar");
    mostrarPorID("cuadro_salida");
}

function cambiarInterfaz2() {
    mostrarPorID("muñeco");
    mostrarPorID("aviso_salida_titulo");
    mostrarPorID("aviso_salida_parrafo");
    ocultarPorID("btn_copiar");
    ocultarPorID("cuadro_salida");
}


/**
 * Usaremos el encriptador de El Cesar en el cual
 * se basa en ponde la tercera letra superior de la
 * letra actual.
 * @param {string} palabra 
 * @returns {string}
 */
function encriptacionDeCesar(palabra) {
    let nuevaPalabra = '';

    for (let letra of palabra) {
        if ( letra !== ' ') {
            let uniCode = letra.charCodeAt(0);
            uniCode += 3;
            nuevaPalabra += String.fromCharCode(uniCode);
        } else {
            nuevaPalabra += ' ';
        }
    }

    return nuevaPalabra;
}

/**
 * Desencriptador del método Cesar
 * @param {string} palabra
 * @returns {string}
 */
function desEncriptacion(palabra) {
    let nuevaPalabra = ' ';

    for (let letra of palabra) {
        if (letra !== ' ') {
            let uniCode = letra.charCodeAt(0);
            uniCode -= 3;
            nuevaPalabra += String.fromCharCode(uniCode);
        } else {
            nuevaPalabra += ' ';
        }
    }
    return nuevaPalabra;
}