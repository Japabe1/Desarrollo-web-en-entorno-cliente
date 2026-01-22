function saludar(nombre) {
    var resultado = document.getElementById("ResEje3");
    if (nombre && nombre.trim() !== "") {
        resultado.value = "Hola, ".concat(nombre, ".");
    }
    else {
        resultado.value = "Hola, invitado.";
    }
}
function mostrarSaludo() {
    var inputNombre = document.getElementById("eje3nombre");
    saludar(inputNombre.value);
}
