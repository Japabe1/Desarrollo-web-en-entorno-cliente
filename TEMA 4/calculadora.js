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

function forTexto() {
    resultado.innerHTML = ``;
    let n1 = getNumero1();
    for (i=1; i <= n1; i++){
        resultado.innerHTML += ` ${i}<br>`;
    }
}

function whileTexto() {
    resultado.innerHTML = ``;
    let n1 = getNumero1();
    let i = 1;
    while (i <= n1){
        resultado.innerHTML += ` ${i}<br>`;
        i++;
    }
}

function doTexto() {
    resultado.innerHTML = ``;
    let n1 = getNumero1();
    let i = 1;
    do{
        resultado.innerHTML += ` ${i}<br>`;
        i++;
    }while (i <= n1)
}

function forTextoBadges() {
    resultado.innerHTML = ``;
    let n1 = getNumero1();
    for (i=1; i <= n1; i++){
        resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;

    }
}
function whileTextoBadges() {
    resultado.innerHTML = ``;
    let n1 = getNumero1();
    let i = 1;
    while (i <= n1){
        resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;

        i++;
    }
}
function doTextoBadges() {
    resultado.innerHTML = ``;
    let n1 = getNumero1();
    let i = 1;
    do{
        resultado.innerHTML += ` <span class="badge bg-primary">${i}</span>`;
        i++;
    }while (i <= n1)
}
