
function encriptar() {
    let texto = document.getElementById("cuadro_entrada").value;

    cambiarInterfaz();

    let texto_salida = document.getElementById('cuadro_salida');

    texto_salida.innerHTML = palabraAUnicode(texto);

    // Limpia el textarea de entrada.
    //document.getElementById("cuadro_entrada").value = '';
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
function mostarPorID(identificador){
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
    mostarPorID("btn_copiar");
    mostarPorID("cuadro_salida");
}


/**
 * Esta función toma una cadena como parametro
 * y retornará una lista de números -los números son 
 * la representación unicode de cada letra.
 * @param {string} palabra 
 * @returns {listaNumero}
 */
function palabraAUnicode(palabra) {
    let listaNumero = []
    for (let i = 0; i  < palabra.length; ++i) {

        if (parseInt(palabra.charCodeAt(i)) !== 32) {
            listaNumero.push(palabra.charCodeAt(i));
        } else {
            break;
        }
    }

    return listaNumero;
}


function 