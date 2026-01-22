/**
 * Interfaz que define la estructura de un Alumno
 */
interface Alumno {
    id: number;        // Identificador único del alumno
    nombre: string;    // Nombre del alumno
    notas: number[];   // Array de notas del alumno
}

/**
 * Clase que implementa la interfaz Alumno y proporciona métodos para calcular notas
 */
class AlumnoApp implements Alumno {
    id: number;
    nombre: string;
    notas: number[];

    /**
     * Constructor que inicializa los datos del alumno
     * @param id - Identificador único
     * @param nombre - Nombre del alumno
     * @param notas - Array de notas
     */
    constructor(id: number, nombre: string, notas: number[]) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }

    /**
     * Calcula la nota media del alumno
     * @returns number - La media redondeada a 2 decimales
     */
    calcularNotaMedia(): number {
        // Suma todas las notas usando reduce
        const sumaNotas = this.notas.reduce((acum, nota) => acum + nota, 0);
        // Divide por el número de notas
        let media = sumaNotas / this.notas.length;
        // Devuelve redondeado a 2 decimales
        return parseFloat(media.toFixed(2));
    }

    /**
     * Genera un resumen del alumno indicando si aprobó o suspendió
     * @returns string - Resumen del alumno
     */
    resumenAlumno(): string {
        // Calcula la nota media
        const notaMedia = this.calcularNotaMedia();
        // Determina si aprobó o suspendió (nota >= 5 es aprobado)
        const estado = notaMedia >= 5 ? "aprobado" : "suspendido";
        return `El alumno ${this.nombre} ha ${estado} con una nota media de ${notaMedia}.`;
    }
}

/**
 * Muestra el resumen de todos los alumnos y calcula la media general de la clase
 */
function mostrarResumenAlumnos(): void {
    // Obtiene el elemento donde se mostrará el resultado
    const resultadoDiv = document.getElementById("resEje10") as HTMLElement;
    // Limpia el contenido previo
    resultadoDiv.innerHTML = "";
    // Limpia la consola
    console.clear();
    // Variable para acumular las medias
    let sumaMedias = 0;
    // Array de alumnos iniciales
    let alumnos: AlumnoApp[] = [
        new AlumnoApp(1, "Ana", [7, 8, 6, 9]),
        new AlumnoApp(2, "Luis", [4, 5, 3, 6]),
        new AlumnoApp(3, "Marta", [10, 9, 8, 9]),
    ];

    // Itera sobre cada alumno
    alumnos.forEach((alumno) => {
        // Añade el resumen del alumno al DOM
        resultadoDiv.innerHTML += alumno.resumenAlumno() + "<br>";
        // Muestra el resumen en la consola
        console.log(alumno.resumenAlumno());
        // Acumula la media del alumno
        sumaMedias += alumno.calcularNotaMedia();
    });

    // Calcula la media general de todos los alumnos
    const mediaGlobal = sumaMedias / alumnos.length;
    // Muestra la media general en el DOM
    resultadoDiv.innerHTML += `<br>La nota media general de la clase es ${mediaGlobal.toFixed(2)}.`;
    // Muestra la media general en la consola
    console.log(`La nota media general de la clase es ${mediaGlobal.toFixed(2)}.`);
}