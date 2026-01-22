var AlumnoApp = /** @class */ (function () {
    function AlumnoApp(id, nombre, notas) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }
    AlumnoApp.prototype.calcularNotaMedia = function () {
        var sumaNotas = this.notas.reduce(function (acum, nota) { return acum + nota; }, 0);
        var media = sumaNotas / this.notas.length;
        return parseFloat(media.toFixed(2));
    };
    AlumnoApp.prototype.resumenAlumno = function () {
        var notaMedia = this.calcularNotaMedia();
        var estado = notaMedia >= 5 ? "aprobado" : "suspendido";
        return "El alumno ".concat(this.nombre, " ha ").concat(estado, " con una nota media de ").concat(notaMedia, ".");
    };
    return AlumnoApp;
}());
function mostrarResumenAlumnos() {
    var resultadoDiv = document.getElementById("resEje10");
    resultadoDiv.innerHTML = "";
    console.clear();
    var sumaMedias = 0;
    var alumnos = [
        new AlumnoApp(1, "Ana", [7, 8, 6, 9]),
        new AlumnoApp(2, "Luis", [4, 5, 3, 6]),
        new AlumnoApp(3, "Marta", [10, 9, 8, 9]),
    ];
    alumnos.forEach(function (alumno) {
        resultadoDiv.innerHTML += alumno.resumenAlumno() + "<br>";
        console.log(alumno.resumenAlumno());
        sumaMedias += alumno.calcularNotaMedia();
    });
    var mediaGlobal = sumaMedias / alumnos.length;
    resultadoDiv.innerHTML += "<br>La nota media general de la clase es ".concat(mediaGlobal.toFixed(2), ".");
    console.log("La nota media general de la clase es ".concat(mediaGlobal.toFixed(2), "."));
}
