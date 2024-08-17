const input_text = document.querySelector("#input-text");
const btn_encriptar = document.querySelector("#btn-encriptar");
const btn_desencriptar = document.querySelector("#btn-desencriptar");
const btn_copiar = document.querySelector("#btn-copiar");

// AGREGAMOS EVENTOS
btn_encriptar.addEventListener("click", cambirSalida);
btn_encriptar.addEventListener("click", encriptar);

btn_desencriptar.addEventListener("click", desencriptar);

btn_copiar.addEventListener("click", copiar);

// FUNCIONES

/**
 * Esta función se encarga de ocultar la
 * image y dos parrafos que se muestran por
 * defecto. Seguido de eso mostrara un parrafo
 * y un botón que se ocultaban por defecto.
 */
function cambirSalida() {
  ocultar("sld-1");
  ocultar("sld-2");
  ocultar("sld-3");

  mostrar("salida-txt");
  mostrar("btn-copiar");

  document.getElementById("btn-desencriptar").disabled = false;
}

function encriptar() {
  let palabra = input_text.value;
  let nuevaPalabra = "";

  for (let letra of palabra) {
    switch (letra) {
      case "a":
        nuevaPalabra += "ai";
        break;
      case "e":
        nuevaPalabra += "enter";
        break;
      case "i":
        nuevaPalabra += "imes";
        break;
      case "o":
        nuevaPalabra += "ober";
        break;
      case "u":
        nuevaPalabra += "ufat";
        break;
      default:
        nuevaPalabra += letra;
        break;
    }
  }

  input_text.value = "";
  document.getElementById("salida-txt").textContent = nuevaPalabra;
}

function desencriptar() {
  let palabra = input_text.value;
  let nuevaPalabra = "";

  for (let i = 0; i < palabra.length; i++) {
    switch (palabra[i]) {
      case "a":
        nuevaPalabra += palabra[i];
        i += 1;
        continue;
      case "e":
        nuevaPalabra += palabra[i];
        i += 4;
        continue;
      case "i":
        nuevaPalabra += palabra[i];
        i += 3;
        continue;
      case "o":
        nuevaPalabra += palabra[i];
        i += 3;
        continue;
      case "u":
        nuevaPalabra += palabra[i];
        i += 3;
        continue;
      default:
        nuevaPalabra += palabra[i];
        break;
    }
  }

  input_text.value = "";
  document.getElementById("salida-txt").textContent = nuevaPalabra;
}

function copiar() {
  const textoCopiado = document.getElementById("salida-txt").innerText;

  navigator.clipboard
    .writeText(textoCopiado)
    .then(() => {
      alert(`Texto copiado ${textoCopiado}`);
    })
    .catch((err) => {
      alert("Error al copiar", err);
    });
}

// FUNCIONES PARA COMOPOSICIÓN

/**
 * Ocultara un elemento HTML que escojamos
 * por su ID.
 */
function ocultar(id) {
  document.getElementById(id).setAttribute("hidden", "true");
}

/**
 * Este elemento se encarga de mostrar un elemento
 * que esta oculto  con la propiedad de hidden. Se
 * escoge a traves del ID.
 * @param {string} id
 */
function mostrar(id) {
  document.getElementById(id).removeAttribute("hidden");
}
