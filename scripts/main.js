
function encriptar() {
    let texto = document.getElementById("cuadro_entrada").value;

    cambiarInterfaz();

    let texto_salida = document.getElementById('cuadro_salida');

    texto_salida.innerHTML = hola(texto);
    //texto_salida.innerHTML = String.fromCharCode(texto.charCodeAt(0) + 3);
    for (let palabra of  parrafoAUnicode(texto)) {
        console.log(palabra);
    }

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
 * @returns {Array}
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

/**
 * Esta función pide como parametro un string que
 * se encargará, miestras la función "palabraAUnicode()"
 * se encargará de separa en plabras y te devolverá
 * un array[][] con las palabraas en unicode.
 * @param {string} parrafo 
 * @returns {Array}
 */
function parrafoAUnicode(parrafo) {
    let tmpParrafo = parrafo.split(' ');
    let listaUnicode = [];

    for (let palabra of tmpParrafo) {
        listaUnicode.push(palabraAUnicode(palabra));
    }

    return listaUnicode;
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
            nuevaPalabra.concat(String.fromCharCode(uniCode));
        }else {
            nuevaPalabra.concat(' ');
        }
    }

    return nuevaPalabra;
}

function hola(palabra) {
    let cadena = '';
    for (let valor of palabra) {
        cadena.concat(valor);
    }

    return cadena;
}