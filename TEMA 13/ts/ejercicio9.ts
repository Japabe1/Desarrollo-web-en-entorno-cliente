/**
 * Convierte un valor a mayúsculas de forma segura
 * @param valor - Valor desconocido a convertir
 * @returns string - El valor convertido a mayúsculas
 * @throws Error - Si el valor no es texto válido o está vacío
 */
function toUpperSeguro(valor: unknown): string {
    // Verifica si el valor es un string y no está vacío
    if (typeof valor === "string" && valor.trim() !== "") {
        // Comprueba si el string contiene solo números
        if (!isNaN(Number(valor))) {
            throw new Error("El valor es un número, no un texto válido");
        }
        // Devuelve el string en mayúsculas
        return valor.toUpperCase();
    } else {
        // Si no es un string válido o está vacío, lanza un error
        throw new Error("El valor no es un texto válido o está vacío");
    }
}

/**
 * Función principal que obtiene un valor del input, lo convierte a mayúsculas
 * y muestra el resultado o error en la página
 */
function ejercicio9(): void {
    // Obtiene el elemento div donde se mostrará el resultado
    const resultadoDiv = document.getElementById("resultadoEje9") as HTMLElement;
    // Obtiene el valor del input de entrada
    const valor: unknown = (document.getElementById("eje9Input") as HTMLInputElement).value;

    try {
        // Intenta convertir el valor a mayúsculas de forma segura
        const resultado = toUpperSeguro(valor);
        // Muestra el resultado en el div
        resultadoDiv.textContent = `Resultado: ${resultado}`;
    } catch (error) {
        // Si ocurre un error, lo captura y muestra el mensaje
        if (error instanceof Error) {
            resultadoDiv.textContent = `Error: ${error.message}`;
        }
    }
}
