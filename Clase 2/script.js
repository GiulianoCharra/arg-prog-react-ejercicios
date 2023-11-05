let operacionSeleccionada = null;
const formCalculadora = document.getElementById("formCalculadora");
const operaciones = document.getElementById("operaciones");
const spanResultado = document.getElementById("resultado");

// Se agrega un evento click a cada botón de operación
let btns = operaciones.getElementsByClassName("operacion");

for (const btn of btns) {
  btn.addEventListener("click", function () {
    seleccionarOperacion(btn);
  });
}

// funcion que al hacer click cambia la clase de btn-primary a btn-outline-primary y viceversa y guara la operacion seleccionada y desactiva el resto
function seleccionarOperacion(elemento) {
  if (elemento.classList.contains("btn-success")) {
    operacionSeleccionada = null;
    elemento.classList.replace("btn-success", "btn-primary");
    return;
  }
  limpiarOperaciones();
  operacionSeleccionada = elemento.value;
  elemento.classList.replace("btn-primary", "btn-success");
  spanResultado.textContent = "";
}

function limpiarOperaciones() {
  const botones = operaciones.getElementsByClassName("btn-success");

  for (const btn of botones) {
    btn.classList.replace("btn-success", "btn-primary");
  }
}

// Ejercicio 1
//
// El propósito de la función callback es permitir que quien llame a la función suma
// proporcione una función personalizada que se ejecutará una vez que se haya calculado la suma de a y b.
// Esto se conoce como una "función de devolución de llamada" o "callback function".
function suma(a, b, callback) {
  let c = a + b;
  callback();
}

// Ejercicio 2
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: División por cero";
  }
}

function raiz(a) {
  if (a < 0) return "Error: Raíz cuadrada de un número negativo";

  return Math.sqrt(a);
}

function potencia(a, b) {
  return Math.pow(a, b);
}

// Funcion que evalua que si no se selecciono ninguna operacion, no se puede realizar el calculo, mostrando el mensaje en el html
function validarOperacion() {
  if (!operacionSeleccionada) {
    spanResultado.classList.add("text-danger");
    spanResultado.textContent = "Error: Debe seleccionar una operación";
    return false;
  }
  spanResultado.classList.remove("text-danger");

  return true;
}

// Ejercicio 3

formCalculadora.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validarOperacion()) return;

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  let resultado;

  switch (operacionSeleccionada) {
    case "sumar":
      resultado = sumar(num1, num2);
      break;
    case "restar":
      resultado = restar(num1, num2);
      break;
    case "multiplicar":
      resultado = multiplicar(num1, num2);
      break;
    case "dividir":
      resultado = dividir(num1, num2);
      break;
    case "raiz":
      resultado = raiz(num1);
      break;
    case "potencia":
      resultado = potencia(num1, num2);
      break;
    default:
      resultado = "Error: Operación no válida";
      break;
  }

  spanResultado.textContent = resultado;
  limpiarOperaciones();
  operacionSeleccionada = null;
  formCalculadora.reset();
});
