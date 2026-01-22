function mostrarProducto() {
    var resultadoDiv = document.getElementById("resEje4");
    console.clear();
    console.log("Resultado: ID: ".concat(producto.id, ", Nombre: ").concat(producto.nombre, ", Precio: ").concat(producto.precio));
    resultadoDiv.textContent = "ID: ".concat(producto.id, ", Nombre: ").concat(producto.nombre, ", Precio: ").concat(producto.precio);
}
var producto = {
    id: 1,
    nombre: "Laptop",
    precio: 1200
};
// Objeto incorrecto (TypeScript marcará error)
// Falta el campo "precio" y el tipo de "id" es incorrecto
/*)
let productoIncorrecto: Producto = {
    id: "A1",
    nombre: "Mouse",
    precio: 25
};
*/
