/**
 * Interfaz que define la estructura de un Empleado
 */
interface Empleado {
    id: number;              // Identificador del empleado
    nombre: string;          // Nombre del empleado
    sueldoMensual: number;   // Sueldo mensual en euros
}

/**
 * Clase que implementa la interfaz Empleado
 */
class EmpleadoEmpresa implements Empleado {
    /**
     * Constructor que inicializa los datos del empleado
     * @param id - Identificador único
     * @param nombre - Nombre del empleado
     * @param sueldoMensual - Sueldo mensual
     */
    constructor(
        public id: number,
        public nombre: string,
        public sueldoMensual: number
    ) {}

    /**
     * Calcula el sueldo anual multiplicando el mensual por 12
     * @returns number - El sueldo anual
     */
    getSueldoAnual(): number {
        return this.sueldoMensual * 12;
    }   
}

/**
 * Crea un empleado y muestra su sueldo anual
 */
function mostrarEmpleado(): void {
    // Limpia la consola
    console.clear();
    // Crea una nueva instancia de EmpleadoEmpresa
    const empleado1 = new EmpleadoEmpresa(1, "Ana López", 2500);
    // Calcula y muestra el sueldo anual en la consola
    console.log(`Sueldo anual de ${empleado1.nombre}: ${empleado1.getSueldoAnual()}€`);
}