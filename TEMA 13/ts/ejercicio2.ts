
/**
 * Calcula la media aritmética de dos números
 * @param a - Primer número
 * @param b - Segundo número
 * @returns number - La media de los dos números
 */
function media(a: number, b: number): number {
    // Calcula la media aritmética
    let media: number;
    media = (a + b) / 2;
    return media;
}

/**
 * Obtiene dos números del DOM, calcula su media y muestra el resultado
 */
function mostrarMedia(): void {
    // Obtiene el primer número del input
    let a: number = Number((document.getElementById("eje2num1") as HTMLInputElement).value);
    // Obtiene el segundo número del input
    let b: number = Number((document.getElementById("eje2num2") as HTMLInputElement).value);
    // Calcula la media de los dos números
    let resultado: number = media(a, b);
    // Muestra el resultado en el input de salida
    (document.getElementById("ResEje2") as HTMLInputElement).value = resultado.toString();
}
