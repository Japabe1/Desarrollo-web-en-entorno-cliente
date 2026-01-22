/**
 * Muestra la información del alumno en la consola y en el DOM
 */
function mostrarAlumno(): void {
    // Constante del centro educativo
    const CENTRO_EDUCATIVO: string = "Medac";
    // Datos del alumno
    let nombreAlumno: string = "Jose Antonio";
    let edad: number = 27;
    let estaMatriculado: boolean = true;
    let notas: number[] = [8.5, 7.0, 9.2, 6.8];

    // Limpiar la consola y mostrar la información
    console.clear();
    console.log("Nombre del alumno:", nombreAlumno);
    console.log("Edad:", edad);
    console.log("Está matriculado:", estaMatriculado);
    console.log("Notas:", notas);
    console.log("Centro educativo:", CENTRO_EDUCATIVO);

    // Obtener el elemento del DOM donde se mostrará el resultado
    const resultadoDiv = document.getElementById("resEje1") as HTMLElement;
    // Insertir el HTML con la información del alumno formateada
    resultadoDiv.innerHTML = `
        <p><strong>Nombre del alumno:</strong> ${nombreAlumno}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Está matriculado:</strong> ${estaMatriculado}</p>
        <p><strong>Notas:</strong> ${notas.join(", ")}</p>
        <p><strong>Centro educativo:</strong> ${CENTRO_EDUCATIVO}</p>
    `;
}
