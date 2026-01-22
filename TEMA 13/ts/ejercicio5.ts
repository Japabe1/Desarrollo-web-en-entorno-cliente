
/**
 * Interfaz que define la estructura de un Producto
 */
interface Producto {
    id: number;     // Identificador único del producto
    nombre: string; // Nombre del producto
    precio: number; // Precio del producto
}

// Array de productos iniciales
const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 45 }
];

/**
 * Muestra todos los productos y calcula el precio total
 */
function mostrarProductos(): void {
    // Obtiene el elemento donde se mostrarán los productos
    const resultadoDiv = document.getElementById("resEje5") as HTMLElement;
    // Obtiene el elemento donde se mostrará el total
    const resultadoDivTotal = document.getElementById("resTotal") as HTMLElement;
    // Limpia la consola
    console.clear();
    // Variable para acumular el precio total
    let precioTotal: number = 0;
    
    // Itera sobre cada producto
    productos.forEach((producto) => {
        // Muestra cada producto en la consola
        console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
        // Acumula el precio total
        precioTotal += producto.precio;
    });

    // Muestra el precio total en el DOM
    resultadoDivTotal.textContent = `Precio total de todos los productos: $${precioTotal}`;
    // Muestra el precio total en la consola
    console.log(`Precio total de todos los productos: $${precioTotal}`);
}