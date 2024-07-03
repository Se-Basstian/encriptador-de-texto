
function btn_encriptar() {
    let texto = document.getElementById("cuadro_entrada").value;

    cambiarInterfaz();

    let texto_salida = document.getElementById('cuadro_salida');

    texto_salida.innerHTML = encriptadorSimple(texto);
    
    document.getElementById('cuadro_entrada').value = ''; // Linea encargada de limpiar el textarea de entrada de datos.
}

function btn_desEncriptacion() {
    let texto = document.getElementById('cuadro_entrada').value;

    cambiarInterfaz();

    let texto_salida = document.getElementById('cuadro_salida');

    texto_salida.innerHTML = desEncriptadorSimple(texto);

    document.getElementById('cuadro_entrada').value = ''; // Limpia la patalla de entrada.
}

function btn_copiar() {

    const textoCopiado = document.getElementById('cuadro_salida').value;
    
    navigator.clipboard.writeText(textoCopiado)
        .then(
            () => {
                alert(`Texto copiado ${textoCopiado}`);
            }
        )
        .catch(
            err => {
                alert("Error al copiar", err);
            }
        );

    cambiarInterfaz2();

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
 * 
 * @param {string} palabra 
 * @returns {string}
 */
function encriptadorSimple(palabra) {
  
    let nuevaPalabra = '';

    for (let letra of palabra) {
        switch (letra) {
            case 'a':
                nuevaPalabra += "ai";
                break;
            case 'e':
                nuevaPalabra += "enter";
                break;
            case 'i':
                nuevaPalabra += "imes";
                break;
            case 'o':
                nuevaPalabra += "ober";
                break;
            case 'u':
                nuevaPalabra += "ufat";
                break;
            default:
                nuevaPalabra += letra;
                break;
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

/**
*@param {string} palabra 
*/
function desEncriptadorSimple(palabra) {
    let nuevaPalabra = '';

    for (let i = 0; i < palabra.length; i++) {
        switch (palabra[i]) {
            case 'a':
                nuevaPalabra += palabra[i];
                i += 1;
                continue;
            case 'e':
                nuevaPalabra += palabra[i];
                i += 4;
                continue;
            case 'i':
                nuevaPalabra += palabra[i];
                i += 3;
                continue;
            case 'o':
                nuevaPalabra += palabra[i];
                i += 3;
                continue;
            case 'u':
                nuevaPalabra += palabra[i];
                i += 3;
                continue;
            default:
                nuevaPalabra += palabra[i];
                break;
        }     
    }

    return nuevaPalabra;
}