/**
 * Crea un saludo personalizado o por defecto
 * @param nombre - Nombre del usuario (parámetro opcional)
 */
function saludar(nombre?: string): void {
    // Obtiene el elemento donde se mostrará el resultado
    const resultado = document.getElementById("ResEje3") as HTMLInputElement;

    // Si se proporciona un nombre válido, saluda personalizadamente
    if (nombre && nombre.trim() !== "") {
        resultado.value = `Hola, ${nombre}.`;
    } else {
        // Si no hay nombre, saluda al invitado
        resultado.value = "Hola, invitado.";
    }
}

/**
 * Obtiene el nombre del input y muestra el saludo correspondiente
 */
function mostrarSaludo(): void {
    // Obtiene el valor del input de nombre
    const inputNombre = document.getElementById("eje3nombre") as HTMLInputElement;
    // Llama a la función saludar con el nombre introducido
    saludar(inputNombre.value);
}
