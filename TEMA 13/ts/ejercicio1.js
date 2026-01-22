function mostrarAlumno() {
    //Centro
    var CENTRO_EDUCATIVO = "Medac";
    //Alumno
    var nombreAlumno = "Jose Antonio";
    var edad = 27;
    var estaMatriculado = true;
    var notas = [8.5, 7.0, 9.2, 6.8];
    // Mostrar la información por consola
    console.clear();
    console.log("Nombre del alumno:", nombreAlumno);
    console.log("Edad:", edad);
    console.log("Está matriculado:", estaMatriculado);
    console.log("Notas:", notas);
    console.log("Centro educativo:", CENTRO_EDUCATIVO);
    var resultadoDiv = document.getElementById("resEje1");
    resultadoDiv.innerHTML = "\n    <p><strong>Nombre del alumno:</strong> ".concat(nombreAlumno, "</p>\n    <p><strong>Edad:</strong> ").concat(edad, "</p>\n    <p><strong>Est\u00E1 matriculado:</strong> ").concat(estaMatriculado, "</p>\n    <p><strong>Notas:</strong> ").concat(notas.join(", "), "</p>\n    <p><strong>Centro educativo:</strong> ").concat(CENTRO_EDUCATIVO, "</p>\n");
}
