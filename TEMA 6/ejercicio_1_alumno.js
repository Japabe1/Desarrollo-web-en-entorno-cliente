/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {
    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información

    // Mostrar el resultado en el DOM
    
    var estudiante = {
        // TODO: Completar las propiedades del objeto
        nombre: "María",
        apellidos: "García López",
        edad: 20,
        curso: "2º DAW",
        mostrarInfo: function () {
            // TODO: Retornar HTML con la información del estudiante
            // Sugerencia: usar template strings o concatenación
            return `nombre: ${this.nombre} <br> apellidos: ${this.apellidos} <br> edad: ${this.edad} <br> curso: ${this.curso}`; // Cambiar esta línea
        }
    };

    // TODO: Mostrar el resultado en el DOM
    // Pista: usar document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
    document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
}

// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    // TODO: Obtener el valor del input con id "color-input"
    var color = document.getElementById("color-input");
    // TODO: Agregar el color al array usando push()
    // TODO: Limpiar el input
    // TODO: Mostrar mensaje de confirmación
    if(color.value !== ""){
        colores.push(color.value);
        document.getElementById("resultado-ej2").innerHTML = "<div class ='alert alert-danger '><strong>Color " +color.value +"</strong> agregado correctamente</div>";
        color.value = "";
        color.focus();
    }else{
        document.getElementById("resultado-ej2").innerHTML = document.getElementById("resultado-ej2").innerHTML = "<div class ='alert alert-danger'><strong> Introduce algun color </strong></div>" ;
        color.focus();
    }
}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    // TODO: Mostrar mensaje indicando qué color se eliminó
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    var numeroColores = colores.length ;
    var ultimoColor = colores.pop();
    
    if (numeroColores  > 0){
    document.getElementById("resultado-ej2").innerHTML = "<div class ='alert alert-danger'><strong> Color " +ultimoColor +" </strong>borrado correctamente</div>";
    }else{
        document.getElementById("resultado-ej2").innerHTML = "<div class ='alert alert-danger'><strong> No hay mas colores </strong></div>" ;
    }
}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista
    var numeroColores = colores.length ;
    var html = "<h5>Lista de Colores:</h5><ul>";
    // TODO: Completar el bucle para mostrar los colores
     colores.forEach(function (color) {
        html += "<li>" + color + "</li>";
    });
     
    html += "</ul>";
    if (numeroColores  > 0){
    document.getElementById("resultado-ej2").innerHTML = html;
    }else{
        document.getElementById("resultado-ej2").innerHTML = "<div class ='alert alert-danger'><strong> No hay mas colores </strong></div>";
    }
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria
    
    productos = [
         { nombre: "Laptop", precio: 899, categoria: "Electrónicos" },
         { nombre: "Smartphone", precio: 699, categoria: "Electrónicos" },
         { nombre: "Camiseta", precio: 29, categoria: "Ropa" },
         { nombre: "Zapatos", precio: 79, categoria: "Calzado" },
         { nombre: "Mochila", precio: 49, categoria: "Accesorios" }
        // TODO: Completar con objetos producto
        // Ejemplo: { nombre: "Laptop", precio: 899, categoria: "Electrónicos" }
    ];

    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora
    var productosOrdenados = productos.slice(); // Crear copia del array original   
    productosOrdenados.sort(function(a, b) {
        return a.precio - b.precio;
    }); 
    
    mostrarProductos(productosOrdenados);
}

function filtrarProductosCaros() {
    // TODO: Filtrar productos con precio mayor a 50€
    // Pista: usar el método filter()

    var productosCaros = []; // TODO: Implementar el filtro
    productosCaros = productos.filter(function(producto){   
        return producto.precio > 50;
    }); 
    mostrarProductos(productosCaros);
}

function mostrarProductos(arrayProductos) {
    // TODO: Mostrar los productos en formato HTML
    // Crear tarjetas o lista con nombre, precio y categoría
    
    var html = "";
    // TODO: Recorrer el array y crear HTML para cada producto
    if (arrayProductos.length === 0) {
        html = "<div class='alert alert-warning'>No hay productos para mostrar</div>";
    } else {
        html = "<h5>Catálogo de Productos:</h5><ul>";
        arrayProductos.forEach(function (producto) {
            html += "<li><strong>Nombre:</strong> " + producto.nombre +
                ", <strong>Precio:</strong> " + producto.precio + "€" +
                ", <strong>Categoría:</strong> " + producto.categoria + "</li>";
        });
        html += "</ul>";
    }       

    document.getElementById("resultado-ej3").innerHTML = html;
}

// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {
        // TODO: Validar que la nota esté entre 0 y 10
        // TODO: Agregar la nota al array de notas
        // TODO: Mostrar mensaje de confirmación
        if(nota >= 0 && nota <= 10){
            this.notas.push(nota);
            document.getElementById("resultado-ej4").innerHTML = "<div class ='alert alert-success'><strong> Nota " +nota +"</strong> agregada correctamente</div>" + estudianteNotas.mostrarNotas();
            
        }else{
            document.getElementById("resultado-ej4").innerHTML = "<div class ='alert alert-danger'><strong> La nota debe estar entre 0 y 10 </strong></div>" + estudianteNotas.mostrarNotas();
        }
    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas
        // TODO: Retornar el promedio redondeado a 2 decimales
        // Pista: usar reduce() o un bucle for
        if (this.notas.length === 0) {
            return "<div>No hay notas disponibles</div>";
        }else{
            var sumaNotas = this.notas.reduce(function(acumulador, siguienteNumero) {
                return acumulador + siguienteNumero;
            }, 0);
        var promedio = sumaNotas / this.notas.length;
        promedio.toFixed(2);
        return promedio; // Cambiar esta línea
        }
    },

    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas
        // TODO: Incluir el promedio si hay notas
        html = "";
        var html = "<h5>Notas del estudiante:</h5><ul>";
        if (this.notas.length === 0) {
            html = "<div class='alert alert-warning'>No hay notas para mostrar</div>";
        }else{
            for (var i = 0; i < this.notas.length; i++) {
                html += "<li>" + this.notas[i] + "</li>";
            }
            html += "</ul>";
            html += "<p><strong>Promedio:</strong> " + this.calcularPromedio() + "</p>";
        }
        return html;
    }
};

function agregarNota() {
    // TODO: Obtener el valor del input de nota
    // TODO: Convertir a número
    // TODO: Llamar al método agregarNota del objeto
    // TODO: Limpiar el input
    // TODO: Actualizar la visualización
    var notaInput = document.getElementById("nota-input");
    var nota = parseFloat(notaInput.value);
    estudianteNotas.agregarNota(nota);
    notaInput.value = "";
    notaInput.focus();   
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio
    // TODO: Mostrar el resultado en el DOM
    var promedio = estudianteNotas.calcularPromedio();
    document.getElementById("resultado-ej4").innerHTML ="<div class='alert alert-info'>Promedio de notas: " + promedio + "</div>";
}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    // TODO: Mostrar el resultado en el DOM
    var notasHTML = estudianteNotas.mostrarNotas();
    document.getElementById("resultado-ej4").innerHTML = notasHTML;   

}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        // TODO: Completar con datos de empleados
        { nombre: "Laura Gómez", departamento: "Recursos Humanos", salario: 2800, antiguedad: 5 },
        { nombre: "Carlos Pérez", departamento: "Desarrollo", salario: 4200, antiguedad: 3 },
        { nombre: "María López", departamento: "Marketing", salario: 3100, antiguedad: 4 },
        { nombre: "Javier Ruiz", departamento: "Ventas", salario: 3500, antiguedad: 2 },
        { nombre: "Ana Torres", departamento: "Ventas", salario: 4000, antiguedad: 6 },
        { nombre: "Sofía Morales", departamento: "Atención al Cliente", salario: 2700, antiguedad: 1 }
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input
    // TODO: Filtrar empleados por departamento
    // TODO: Mostrar los resultados

    var departamento = document.getElementById("departamento-input"); // TODO: Obtener del input
    var empleadosDepto = []; // TODO: Implementar filtro
    empleadosDepto = empleados.filter(function(empleado){
        return empleado.departamento.toLowerCase() === departamento.value.toLowerCase();
    });

    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€
    var empleadosAltoSalario = []; // TODO: Implementar filtro
    empleadosAltoSalario = empleados.filter(function(empleado){
        return empleado.salario > 3000;
    });

    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario

    var html = "";
    // TODO: Crear HTML para cada empleado
    if (arrayEmpleados.length === 0) {
        html = "<div class='alert alert-warning'>No hay empleados para mostrar</div>";
    } else {
        html = "<h5>Lista de Empleados:</h5><ul>";
        arrayEmpleados.forEach(function (empleado) {
            html += "<li><strong>Nombre:</strong> " + empleado.nombre +
                ", <strong>Departamento:</strong> " + empleado.departamento +
                ", <strong>Salario:</strong> " + empleado.salario + "€</li>";
        });
        html += "</ul>";
    }   

    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    // TODO: Mostrar qué elementos se eliminaron
    // TODO: Mostrar el array resultante
    var elementosEliminados = ciudades.splice(2, 2); 
    var html = "<h5>Elemento eliminado:</h5>" + elementosEliminados.join(", ") +
        "<h5>Array resultante:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    // TODO: Mostrar la porción extraída
    // TODO: Mostrar que el array original no se modifica
    var porcionExtraida = ciudades.slice(0, 3);
    var html = "<h5>Porción extraída:</h5>" + porcionExtraida.join(", ") +
        "<h5>Array original (sin modificar):</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    // TODO: Usar indexOf() para encontrar su posición
    // TODO: Mostrar los resultados
    var cidudadBuscada = ciudades.find(function(ciudad){
        return ciudad === 'Madrid';
    });
    var posicionCiudad = ciudades.indexOf("Madrid");
    if (cidudadBuscada) {
        var html = "<h5>Ciudad encontrada:</h5>" + cidudadBuscada +
            "<h5> En la posición: </h5>" + posicionCiudad;
    } else {
        var html = "<div class='alert alert-warning'>Madrid no encontrada en el array</div>";
    }
    document.getElementById("resultado-ej6").innerHTML = html;
    var html = ""
}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
    // TODO: Asignar propiedades usando this
    // TODO: Crear método acelerar() que incremente la velocidad
    // TODO: Crear método mostrarInfo() que retorne información
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;

    this.acelerar = function(){
        this.velocidad += 10;   
    }

    this.mostrarInfo = function(){
        return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año + ", Velocidad: " + this.velocidad + " km/h";
    }
}

var vehiculos = [];



function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    // TODO: Agregar al array vehiculos
    vehiculos = [];
    var v1 = new Vehiculo("Toyota", "Corolla", 2020);
    var v2 = new Vehiculo("Honda", "Civic", 2021);
    var v3 = new Vehiculo("Ford", "Focus", 2019);
    vehiculos.push(v1,v2,v3);
    document.getElementById("resultado-ej7").innerHTML = "<div class='alert alert-success'>Vehículos creados correctamente</div>";
}

function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    // TODO: Actualizar la visualización
    vehiculos.forEach(function (vehiculo) {
        vehiculo.acelerar();
    });
    mostrarInfoVehiculos();
}

function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos
    var html = " <h5>Información de Vehículos:</h5>";
    // TODO: Recorrer array y mostrar info de cada vehículo
    vehiculos.forEach(function (vehiculo) {
        html += "<p>" + vehiculo.mostrarInfo() + "</p>";
    });
    document.getElementById("resultado-ej7").innerHTML = html;
}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // TODO: Crear matriz 3x3 con números aleatorios
    // Pista: usar bucles anidados y Math.random()
    for (var i = 0; i < 3; i++) {
        matriz[i] = [];
        for (var j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10) + 1; // Números entre 1 y 10
        }
    }
    
    document.getElementById("resultado-ej8").innerHTML = "<div class='alert alert-success'>Matriz 3x3 creada correctamente</div>";
}

function sumarDiagonal() {
    // TODO: Calcular la suma de la diagonal principal
    // TODO: Mostrar el resultado
    var sumaDiagonal = 0;
    for (var i = 0; i < 3; i++) {
        sumaDiagonal += matriz[i][i];
    }
    document.getElementById("resultado-ej8").innerHTML =
        "<div class='alert alert-success'>Suma diagonal principal: " + sumaDiagonal + "</div>";
}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML
    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered'>";

    // TODO: Crear filas y celdas de la tabla
    for (var i = 0; i < 3; i++) {
        html += "<tr>";
        for (var j = 0; j < 3; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("resultado-ej8").innerHTML = html;
}

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // TODO: Crear array con números del 1 al 10
    numeros = [1,2,3,4,5,6,7,8,9,10]; // TODO: Completar

    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    // TODO: Usar map() para duplicar todos los números
    var duplicados = []; // TODO: Implementar map
    duplicados = numeros.map(function(numero){
        return numero * 2;
    });
    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() {
    // TODO: Usar filter() para obtener solo números pares
    var pares = []; // TODO: Implementar filter
    pares = numeros.filter(function(numero){
        return numero % 2 == 0;
    })
    mostrarArray("Números pares", pares);
}

function sumarConReduce() {
    // TODO: Usar reduce() para sumar todos los números
    var suma = 0; // TODO: Implementar reduce
    suma = numeros.reduce(function(acumulador, siguienteNumero){
        return acumulador + siguienteNumero;
    },0);
    
    document.getElementById("resultado-ej9").innerHTML =
        "<div class='alert alert-success'>Suma total: " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];


function agregarLibro() {
    // TODO: Obtener valores de los inputs
    var titulo = document.getElementById("libro-titulo").value.trim(); // TODO: Obtener del input
    var autor = document.getElementById("libro-autor").value.trim(); // TODO: Obtener del input
    var año = document.getElementById("libro-year").value.trim(); // TODO: Obtener y convertir a número
    var genero = document.getElementById("libro-genero").value.trim(); // TODO: Obtener del select
    

    // TODO: Validar que todos los campos estén completos
    if(titulo === "" || autor === "" || año === "" || genero === ""){
        document.getElementById("resultado-ej10").innerHTML = "<div class ='alert alert-success'><strong>Debes rellenar todos los campos </strong></div>" ;
        return;
    }
    // TODO: Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        // TODO: Completar propiedades
        titulo: titulo,
        autor: autor,
        año: parseInt(año),
        genero: genero
    };

    // TODO: Limpiar los inputs
    biblioteca.push(libro);
    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";
    document.getElementById("libro-titulo").focus();

    // TODO: Mostrar mensaje de confirmación
    var alerta = "<div class ='alert alert-success'><strong> Libro " +libro.titulo +" </strong> añadido correctamente</div>" ;
    
    // TODO: Actualizar visualización
    mostrarLibros(biblioteca, alerta);
}

function mostrarBiblioteca() {
    // TODO: Mostrar todos los libros de la biblioteca
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // TODO: Ordenar libros por título alfabéticamente
    var librosOrdenados = []; // TODO: Implementar sort
    librosOrdenados = biblioteca.slice().sort(function(a,b){
        return a.titulo.toLowerCase().localeCompare(b.titulo.toLowerCase());    
    }); // Crear copia del array original
    

    mostrarLibros(librosOrdenados);
}


function filtrarPorGenero() {
    // TODO: Obtener género seleccionado
    // TODO: Filtrar libros por género
    var librosFiltrados = []; // TODO: Implementar filter
    var generoSelect = document.getElementById("libro-genero").value.trim();

    if (generoSelect === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-warning'>Selecciona un género para filtrar.</div>";
        return;
    }else{
        librosFiltrados = biblioteca.filter(function(libro){
            return libro.genero.toLowerCase() === generoSelect.toLowerCase();
        });
    }  

    console.log(librosFiltrados);

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // TODO: Filtrar libros publicados después del 2020
    var recientes = []; // TODO: Implementar filter
    recientes = biblioteca.filter(function(libro){
        return libro.año > 2020;
    });

    mostrarLibros(recientes);
}

function mostrarLibros(arrayLibros, alerta="") {
    // TODO: Mostrar libros en formato de tarjetas HTML
    var html = "";

    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        // TODO: Crear HTML para cada libro
        html = "<div class='row'>";
        arrayLibros.forEach(function (libro) {
            html += "<div class='col-md-4'><div class='card mb-3'><div class='card-body'>" +
                "<h5 class='card-title'>" + libro.titulo + "</h5>" +
                "<p class='card-text'><strong>Autor:</strong> " + libro.autor + "</p>" +
                "<p class='card-text'><strong>Año:</strong> " + libro.año + "</p>" +
                "<p class='card-text'><strong>Género:</strong> " + libro.genero + "</p>" +
                "</div></div></div>";
        });
        html += "</div>";   
    }

    document.getElementById("resultado-ej10").innerHTML = alerta + html;
}

// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10
    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);

});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/