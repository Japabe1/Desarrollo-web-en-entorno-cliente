var resultado = document.getElementById("resultado");

function getNumero1() {
    return Number(document.getElementById("numero1").value) || 0;
}

function getNumero2() {
    return Number(document.getElementById("numero2").value) || 0;
}

// --- Operaciones ---
//Sumar
function sumar() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 + n2;
    resultado.innerHTML = `Resultado de la suma: ${res}`;
}

//Restar
function restar() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 - n2;
    resultado.innerHTML = `<strong>Resultado de la resta:</strong> ${res}`;
}

//Multiplicar
function multiplicar() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 * n2;
    resultado.innerHTML = `<strong>Resultado de la multiplicación:</strong> ${res}`;
}

//Dividir
function dividir() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 / n2;
    resultado.innerHTML = `<strong>Resultado de la división:</strong> ${res}`;
}

//Potencia
function potencia() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 ** n2;
    resultado.innerHTML = `<strong>Resultado de la potencia:</strong> ${res}`;
}

//Modulo
function modulo() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let res = n1 % n2;
    resultado.innerHTML = `<strong>Resultado del modulo:</strong> ${res}`;
}

// --- Bucles ---
//Buble for
function forTexto() {
    resultado.innerHTML = `<b>Bucle For número 1: </b> <br>`;
    let n1 = getNumero1();
    for (i=1; i <= n1; i++){
        resultado.innerHTML += ` ${i}<br>`;
    }
    resultado.innerHTML += `<hr><b>Bucle For número 2: </b> <br>`;
    let n2 = getNumero2();
    for (i=1; i <= n2; i++){
        resultado.innerHTML += ` ${i}<br>`;
    }
}

//Bucle while
function whileTexto() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let i = 1;
    resultado.innerHTML = `<b>Bucle While número 1: </b> <br>`;
    while (i <= n1){
        resultado.innerHTML += ` ${i}<br>`;
        i++;
    }
    i = 1;
    resultado.innerHTML += `<hr><b>Bucle While número 2: </b> <br>`;
    while (i <= n2){
        resultado.innerHTML += ` ${i}<br>`;
        i++;
    }
}

//Bucle do...while
function doTexto() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let i = 1;
    resultado.innerHTML = `<b>Bucle Do...While número 1: </b> <br>`;
    if(n1 > 0){
        do{
            resultado.innerHTML += ` ${i}<br>`;
            i++;
        }while (i <= n1)
    }
    i = 1;
    resultado.innerHTML += `<hr><b>Bucle Do...While número 2: </b> <br>`;
    if(n2 > 0){
        do{
            resultado.innerHTML += ` ${i}<br>`;
            i++;
        }while (i <= n2)
    }
}

//Bucle for con badges
function forTextoBadges() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    resultado.innerHTML = `<b>Bucle For Badges número 1: </b> <br>`;
    for (i=1; i <= n1; i++){
        resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
    }

    resultado.innerHTML += `<hr><b>Bucle For Badges número 2: </b> <br>`;
    for (i=1; i <= n2; i++){
        resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
    }

}

//Bucle while con badges
function whileTextoBadges() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let i = 1;
    resultado.innerHTML = `<b>Bucle While Badges número 1: </b> <br>`;
    while (i <= n1){
        resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;

        i++;
    }

    i=1;
    resultado.innerHTML += `<hr><b>Bucle While Badges número 2: </b> <br>`;
    while (i <= n2){
        resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
        i++;
    }

//bucle do...while con badges
}
function doTextoBadges() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    let i = 1;
    resultado.innerHTML = `<b>Bucle Do...While Badges número 1: </b> <br>`;
    if(n1 > 0){
        do{
            resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
            i++;
        }while (i <= n1)
    }
    
    i=1;
    resultado.innerHTML += `<hr><b>Bucle Do...While Badges número 2: </b> <br>`;
    if(n2 > 0){
        do{
            resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
            i++;
        }while (i <= n2)
    }
    
}

// Comprobar si un número es primo
function esPrimo() {
    let n1 = getNumero1();
    if (n1 <= 1) {
        resultado.innerHTML = `<strong>${n1} no es un número primo</strong>`;
        return;
    }
    
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(n1); i++) {
        if (n1 % i === 0) {
            esPrimo = false;
            break;
        }
    }
    
    resultado.innerHTML = `<strong>${n1} ${esPrimo ? 'es' : 'no es'} un número primo</strong>`;
}

// Calcular logaritmo
function calcularLogaritmo() {
    let n1 = getNumero1();
    let n2 = getNumero2();
    
    if (n1 <= 0) {
        resultado.innerHTML = `<strong>Error: El número debe ser positivo</strong>`;
        return;
    }
    
    if (n2 === 0) {
        // Si no se proporciona base, usar logaritmo natural
        let res = Math.log(n1);
        resultado.innerHTML = `<strong>Logaritmo natural de ${n1}:</strong> ${res.toFixed(4)}`;
    } else {
        // Si se proporciona base, usar logaritmo en esa base
        if (n2 <= 0 || n2 === 1) {
            resultado.innerHTML = `<strong>Error: La base debe ser un número positivo distinto de 1</strong>`;
            return;
        }
        let res = Math.log(n1) / Math.log(n2);
        resultado.innerHTML = `<strong>Logaritmo en base ${n2} de ${n1}:</strong> ${res.toFixed(4)}`;
    }
}
