/**
 * Interfaz que define la estructura de un Producto
 */
interface Producto {
    id: number;          // Identificador único del producto
    nombre: string;      // Nombre del producto
    precio: number;      // Precio del producto en euros
}

/**
 * Muestra los datos del producto en el DOM y consola
 */
function mostrarProducto(): void {
    // Obtiene el elemento donde se mostrarán los datos
    const resultadoDiv = document.getElementById("resEje4") as HTMLElement;
    // Limpia la consola
    console.clear();
    // Muestra los datos del producto en la consola
    console.log(`Resultado: ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
    // Muestra los datos del producto en el DOM
    resultadoDiv.textContent = `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`;
}

// Objeto que cumple con la interfaz Producto
let producto: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 1200
};

// Ejemplo comentado de un objeto incorrecto (TypeScript marcará error)
// Falta el campo "precio" y el tipo de "id" es incorrecto
/*
let productoIncorrecto: Producto = {
    id: "A1",
    nombre: "Mouse",
    precio: 25
};
*/
