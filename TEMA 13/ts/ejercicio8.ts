/**
 * Dobla un número positivo
 * @param n - Número a doblar
 * @returns number - El número doblado
 * @throws Error - Si el número es negativo
 */
function doblarPositivo(n: number): number {
    // Valida que el número no sea negativo
    if (n < 0) {
        throw new Error("El número no puede ser negativo");
    }
    // Devuelve el número multiplicado por 2
    return n * 2;
}

/**
 * Obtiene un número del input, lo dobla y muestra el resultado o error
 */
function mostrarResultado(): void {
    // Obtiene el elemento donde se mostrará el resultado
    const resultadoDiv = document.getElementById("resultado") as HTMLElement;
    // Limpia la consola
    console.clear();

    try {
        // Obtiene el número del input
        const num = Number((document.getElementById("eje8Num") as HTMLInputElement).value);
        console.log("Número introducido:", num);
        // Dobla el número (puede lanzar excepción si es negativo)
        const resultado = doblarPositivo(num);

        // Muestra el resultado en el DOM
        resultadoDiv.textContent = `Resultado: ${resultado.toString()}`;
        console.log("Resultado calculado:", resultado);
    } catch (error) {
        // Captura el error y muestra el mensaje
        if (error instanceof Error) {
            resultadoDiv.textContent = `Error: ${error.message}`;
            console.error("Se produjo un error:", error.message);
        } else {
            resultadoDiv.textContent = "Se produjo un error desconocido";
            console.error("Se produjo un error desconocido");
        }
    }
}

