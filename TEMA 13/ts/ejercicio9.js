function toUpperSeguro(valor) {
    if (typeof valor === "string" && valor.trim() !== "") {
        if (!isNaN(Number(valor))) {
            throw new Error("El valor es un número, no un texto válido");
        }
        return valor.toUpperCase();
    }
    else {
        throw new Error("El valor no es un texto válido");
    }
}
function ejercicio9() {
    var resultadoDiv = document.getElementById("resultadoEje9");
    var valor = document.getElementById("eje9Input").value;
    try {
        var resultado = toUpperSeguro(valor);
        resultadoDiv.textContent = "Resultado: ".concat(resultado);
    }
    catch (error) {
        if (error instanceof Error) {
            resultadoDiv.textContent = "Error: ".concat(error.message);
        }
    }
}
