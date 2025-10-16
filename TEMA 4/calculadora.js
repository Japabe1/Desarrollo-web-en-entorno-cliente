// Elemento DOM donde se mostrarán los resultados
var resultado = document.getElementById("resultado");

/**
 * Obtiene el valor del primer número ingresado
 * @returns {number} El número ingresado o 0 si está vacío o no es válido
 */
function getNumero1() {
    return Number(document.getElementById("numero1").value) || 0;
}

/**
 * Obtiene el valor del segundo número ingresado
 * @returns {number} El número ingresado o 0 si está vacío o no es válido
 */
function getNumero2() {
    return Number(document.getElementById("numero2").value) || 0;
}

// ===============================
// OPERACIONES MATEMÁTICAS BÁSICAS
// ===============================
/**
 * Suma los dos números ingresados
 * Obtiene los valores, realiza la suma y muestra el resultado
 */
function sumar() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 + n2;
    resultado.innerHTML = `<strong>Resultado de la suma:</strong> ${res}`;
}

/**
 * Resta el segundo número del primero
 * Obtiene los valores, realiza la resta y muestra el resultado
 */
function restar() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 - n2;
    resultado.innerHTML = `<strong>Resultado de la resta:</strong> ${res}`;
}

/**
 * Multiplica los dos números ingresados
 * Obtiene los valores, realiza la multiplicación y muestra el resultado
 */
function multiplicar() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 * n2;
    resultado.innerHTML = `<strong>Resultado de la multiplicación:</strong> ${res}`;
}

/**
 * Divide el primer número entre el segundo
 * Obtiene los valores, realiza la división y muestra el resultado
 * Nota: No incluye validación para división por cero
 */
function dividir() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 / n2;
    resultado.innerHTML = `<strong>Resultado de la división:</strong> ${res}`;
}

/**
 * Calcula la potencia del primer número elevado al segundo
 * Utiliza el operador ** para la exponenciación
 */
function potencia() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 ** n2;
    resultado.innerHTML = `<strong>Resultado de la potencia:</strong> ${res}`;
}

/**
 * Calcula el módulo (resto de la división) entre los dos números
 * Obtiene los valores, calcula el resto y muestra el resultado
 */
function modulo() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 % n2;
    resultado.innerHTML = `<strong>Resultado del modulo:</strong> ${res}`;
}

// ===============================
// DEMOSTRACIÓN DE BUCLES
// ===============================

/**
 * Demuestra el uso del bucle FOR con texto simple
 * Muestra una secuencia de números del 1 hasta el valor ingresado
 * para ambos números, utilizando saltos de línea
 */
function forTexto() {
    resultado.innerHTML = `<b>Bucle For número 1: </b> <br>`;
    let n1 = getNumero1();
    if (n1 < 0) {
        resultado.innerHTML += `Solo se permiten números positivos<br>`;
    } else {
        for (i=1; i <= n1; i++){
            resultado.innerHTML += ` ${i}<br>`;
        }
    }
    
    resultado.innerHTML += `<hr><b>Bucle For número 2: </b> <br>`;
    let n2 = getNumero2();
    if (n2 < 0) {
        resultado.innerHTML += `Solo se permiten números positivos<br>`;
    } else {
        for (i=1; i <= n2; i++){
            resultado.innerHTML += ` ${i}<br>`;
        }
    }
}

/**
 * Demuestra el uso del bucle WHILE con texto simple
 * Similar al bucle for, pero usando la estructura while
 * Requiere inicialización y incremento manual del contador
 */
function whileTexto() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let i = 1;
    
    // Primer bucle con n1
    resultado.innerHTML = `<b>Bucle While número 1: </b> <br>`;
    if (n1 < 0) {
        resultado.innerHTML += `Solo se permiten números positivos<br>`;
    } else {
        while (i <= n1){
            resultado.innerHTML += ` ${i}<br>`;
            i++;
        }
    }
    
    // Segundo bucle con n2
    i = 1; // Reiniciar contador
    resultado.innerHTML += `<hr><b>Bucle While número 2: </b> <br>`;
    if (n2 < 0) {
        resultado.innerHTML += `Solo se permiten números positivos<br>`;
    } else {
        while (i <= n2){
            resultado.innerHTML += ` ${i}<br>`;
            i++;
        }
    }
}

/**
 * Demuestra el uso del bucle DO...WHILE con texto simple
 * A diferencia de while, siempre ejecuta al menos una vez
 * antes de evaluar la condición
 */
function doTexto() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let i = 1;
    
    resultado.innerHTML = `<b>Bucle Do...While número 1: </b> <br>`;
    if (n1 < 0) {
        resultado.innerHTML += `Solo se permiten números positivos<br>`;
    } else if (n1 > 0) {
        do {
            resultado.innerHTML += ` ${i}<br>`;
            i++;
        } while (i <= n1)
    }
    
    i = 1;
    resultado.innerHTML += `<hr><b>Bucle Do...While número 2: </b> <br>`;
    if (n2 < 0) {
        resultado.innerHTML += `Solo se permiten números positivos<br>`;
    } else if (n2 > 0) {
        do {
            resultado.innerHTML += ` ${i}<br>`;
            i++;
        } while (i <= n2)
    }
}

/**
 * Demuestra el bucle FOR con estilo visual usando badges de Bootstrap
 * Similar a forTexto pero usa elementos span con clase badge para
 * mostrar los números con un estilo más atractivo
 */
function forTextoBadges() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    
    // Primer bucle con badges
    resultado.innerHTML = `<b>Bucle For Badges número 1: </b> <br>`;
    if (n1 < 0) {
        resultado.innerHTML += `<span class="badge bg-danger">Solo se permiten números positivos</span><br>`;
    } else {
        for (i=1; i <= n1; i++){
            resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
        }
    }

    // Segundo bucle con badges
    resultado.innerHTML += `<hr><b>Bucle For Badges número 2: </b> <br>`;
    if (n2 < 0) {
        resultado.innerHTML += `<span class="badge bg-danger">Solo se permiten números positivos</span><br>`;
    } else {
        for (i=1; i <= n2; i++){
            resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
        }
    }
}

//Bucle while con badges
function whileTextoBadges() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let i = 1;
    
    resultado.innerHTML = `<b>Bucle While Badges número 1: </b> <br>`;
    if (n1 < 0) {
        resultado.innerHTML += `<span class="badge bg-danger">Solo se permiten números positivos</span><br>`;
    } else {
        while (i <= n1) {
            resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
            i++;
        }
    }

    i = 1;
    resultado.innerHTML += `<hr><b>Bucle While Badges número 2: </b> <br>`;
    if (n2 < 0) {
        resultado.innerHTML += `<span class="badge bg-danger">Solo se permiten números positivos</span><br>`;
    } else {
        while (i <= n2) {
            resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
            i++;
        }
    }

//bucle do...while con badges
}
function doTextoBadges() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let i = 1;
    
    resultado.innerHTML = `<b>Bucle Do...While Badges número 1: </b> <br>`;
    if (n1 < 0) {
        resultado.innerHTML += `<span class="badge bg-danger">Solo se permiten números positivos</span><br>`;
    } else if (n1 > 0) {
        do {
            resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
            i++;
        } while (i <= n1)
    }
    
    i = 1;
    resultado.innerHTML += `<hr><b>Bucle Do...While Badges número 2: </b> <br>`;
    if (n2 < 0) {
        resultado.innerHTML += `<span class="badge bg-danger">Solo se permiten números positivos</span><br>`;
    } else if (n2 > 0) {
        do {
            resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
            i++;
        } while (i <= n2)
    }
    
}

/**
 * Verifica si un número es primo
 * Un número es primo si solo es divisible por 1 y por sí mismo
 * Utiliza el método de verificación hasta la raíz cuadrada del número
 * para optimizar el proceso
 */
function esPrimo() {
    let n1 = getNumero1();
    // Los números menores o iguales a 1 no son primos
    if (n1 <= 1) {
        resultado.innerHTML = `<strong>${n1} no es un número primo</strong>`;
        return;
    }
    
    let esPrimo = true;
    // Solo necesitamos verificar hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(n1); i++) {
        if (n1 % i === 0) {
            esPrimo = false;
            break;
        }
    }
    
    resultado.innerHTML = `<strong>${n1} ${esPrimo ? 'es' : 'no es'} un número primo</strong>`;
}

/**
 * Calcula el logaritmo de un número
 * Si no se proporciona base (n2), calcula el logaritmo natural (base e)
 * Si se proporciona base, calcula el logaritmo en esa base específica
 */
function calcularLogaritmo() {
    let n1 = getNumero1();  // Número del que calcularemos el logaritmo
    let n2 = getNumero2();  // Base del logaritmo (opcional)
    
    // Validar que el número sea positivo (dominio del logaritmo)
    if (n1 <= 0) {
        resultado.innerHTML = `<strong>Error: El número debe ser positivo</strong>`;
        return;
    }
    
    if (n2 === 0) {
        // Si no se proporciona base, calcular logaritmo natural (base e)
        let res = Math.log(n1);
        resultado.innerHTML = `<strong>Logaritmo natural de ${n1}:</strong> ${res.toFixed(4)}`;
    } else {
        // Para logaritmo en base específica, validar que la base sea válida
        if (n2 <= 0 || n2 === 1) {
            resultado.innerHTML = `<strong>Error: La base debe ser un número positivo distinto de 1</strong>`;
            return;
        }
        // Usar la propiedad del cambio de base: log_b(x) = ln(x) / ln(b)
        let res = Math.log(n1) / Math.log(n2);
        resultado.innerHTML = `<strong>Logaritmo en base ${n2} de ${n1}:</strong> ${res.toFixed(4)}`;
    }
}
