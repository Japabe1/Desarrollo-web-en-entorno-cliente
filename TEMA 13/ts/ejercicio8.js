function doblarPositivo(n) {
    if (n < 0) {
        throw new Error("El número no puede ser negativo");
    }
    return n * 2;
}
function mostrarResultado() {
    var resultadoDiv = document.getElementById("resultado");
    console.clear();
    try {
        var num = Number(document.getElementById("eje8Num").value);
        console.log("Número introducido:", num);
        var resultado = doblarPositivo(num);
        resultadoDiv.textContent = "Resultado:" + resultado.toString();
        console.log("Resultado calculado:", resultado);
    }
    catch (error) {
        if (error instanceof Error) {
            resultadoDiv.textContent = "Error: ".concat(error.message);
            console.error("Se produjo un error:", error.message);
        }
        else {
            resultadoDiv.textContent = "Se produjo un error desconocido";
            console.error("Se produjo un error desconocido");
        }
    }
}
