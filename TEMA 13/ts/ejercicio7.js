/**
 * Clase que implementa la interfaz Empleado
 */
var EmpleadoEmpresa = /** @class */ (function () {
    /**
     * Constructor que inicializa los datos del empleado
     * @param id - Identificador único
     * @param nombre - Nombre del empleado
     * @param sueldoMensual - Sueldo mensual
     */
    function EmpleadoEmpresa(id, nombre, sueldoMensual) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    /**
     * Calcula el sueldo anual multiplicando el mensual por 12
     * @returns number - El sueldo anual
     */
    EmpleadoEmpresa.prototype.getSueldoAnual = function () {
        return this.sueldoMensual * 12;
    };
    return EmpleadoEmpresa;
}());
/**
 * Crea un empleado y muestra su sueldo anual
 */
function mostrarEmpleado() {
    // Limpia la consola
    console.clear();
    // Crea una nueva instancia de EmpleadoEmpresa
    var empleado1 = new EmpleadoEmpresa(1, "José Antonio", 2500);
    // Calcula y muestra el sueldo anual en la consola
    console.log("Sueldo anual de ".concat(empleado1.nombre, ": ").concat(empleado1.getSueldoAnual(), "\u20AC"));
}
