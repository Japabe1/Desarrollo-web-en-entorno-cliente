var productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 45 }
];
function mostrarProductos() {
    var resultadoDiv = document.getElementById("resEje5");
    var resultadoDivTotal = document.getElementById("resTotal");
    console.clear();
    var precioTotal = 0;
    productos.forEach(function (producto) {
        console.log("Producto: ".concat(producto.nombre, ", Precio: $").concat(producto.precio));
        precioTotal += producto.precio;
    });
    resultadoDivTotal.textContent = "Precio total de todos los productos: $".concat(precioTotal);
    console.log("Precio total de todos los productos: $".concat(precioTotal));
}
