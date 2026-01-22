var EmpleadoEmpresa = /** @class */ (function () {
    function EmpleadoEmpresa(id, nombre, sueldoMensual) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    EmpleadoEmpresa.prototype.getSueldoAnual = function () {
        return this.sueldoMensual * 12;
    };
    return EmpleadoEmpresa;
}());
function mostrarEmpleado() {
    console.clear();
    var empleado1 = new EmpleadoEmpresa(1, "Ana López", 2500);
    console.log("Sueldo anual de ".concat(empleado1.nombre, ": ").concat(empleado1.getSueldoAnual(), "\u20AC"));
}
