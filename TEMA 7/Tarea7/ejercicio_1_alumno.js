// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  
  function raizCuadrada(numero) {
    return Math.sqrt(numero);
  }

  var res = raizCuadrada(v);
  

  if(!isNaN(res)){
    out.textContent = `Resultado: ${res}`;
  }else{
    out.innerHTML = "valor no valido"
  }

});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';

  const alerta = (mensaje) => alert(mensaje);
  alerta(msg);
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {
  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const suma = new Function ('a','b','return a + b;');

  var num1 = Number(document.getElementById("a-e3a").value);
  var num2 = Number(document.getElementById("a-e3b").value);
  let resultado = suma(num1,num2)
  document.getElementById("out-e3").textContent = resultado;
});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
  muestraMensaje(mensaje);
  var mensaje = 'Hola, mundo';

  function muestraMensaje(texto) {
    console.log(texto);
  }
  document.getElementById("out-e4").textContent = "Js reordena las declaraciones al principio, pero var mensaje queda vacio por lo que se muestra undifined en el console log"
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const resultado = (function(){
    console.log("...");
    return 6;
  })()
  document.getElementById("out-e5").textContent = `El resultado de la IIFE es: ${resultado}`
});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  let resultado;
  const dividir = function(a,b){
    let resultado;
    if(b === 0){
      resultado = "No se puede dividir entre 0";
    }else{
      resultado = a / b;
    }
    
    return resultado;
  }
  num1 = parseFloat(document.getElementById("a-e6a").value);
  num2 = parseFloat(document.getElementById("a-e6b").value);
  resultado = dividir(num1,num2);
  document.getElementById("out-e6").textContent = `El resultado de la división es: ${resultado}`;

});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 

});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {

  // TODO: implementar function saludar

});

// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {

  // TODO: implementar función externa e interna

});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)

});
