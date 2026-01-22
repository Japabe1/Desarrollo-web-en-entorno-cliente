/**
 * Clase que representa una persona
 */
class Persona {
    // Propiedad pública: puede ser accedida desde fuera
    public nombre: string;
    // Propiedad privada: solo puede ser accedida dentro de la clase
    private edad: number;

    /**
     * Constructor que inicializa el nombre y la edad
     * @param nombre - Nombre de la persona
     * @param edad - Edad de la persona
     */
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    /**
     * Método que retorna una presentación de la persona
     * @returns string - La presentación formateada
     */
    public presentarse(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

/**
 * Crea una instancia de Persona y muestra su presentación
 */
function mostrarPresentacion(): void {
    // Obtiene el elemento donde se mostrará el resultado
    const resultadoDiv = document.getElementById("resEje6") as HTMLElement;
    // Limpia la consola
    console.clear();

    // Crea una nueva instancia de Persona
    const persona = new Persona("Jose Antonio", 27);
    // Muestra la presentación en el DOM
    resultadoDiv.textContent = persona.presentarse();
    // Muestra la presentación en la consola
    console.log(persona.presentarse());
    // Nota: No se puede acceder a persona.edad porque es una propiedad privada
    // console.log(persona.edad); // Error: La propiedad 'edad' es privada
}