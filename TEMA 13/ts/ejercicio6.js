var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
function mostrarPresentacion() {
    var resultadoDiv = document.getElementById("resEje6");
    console.clear();
    var persona = new Persona("Jose Antonio", 27);
    resultadoDiv.textContent = persona.presentarse();
    console.log(persona.presentarse());
    //console.log(persona.edad); // Error: La propiedad 'edad' es privada y no se puede acceder desde fuera de la clase.
}
