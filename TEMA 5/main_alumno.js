/* =========================================================================
   Tema 5 – Práctica DOM - Archivo del Alumno
   
   INSTRUCCIONES:
   1. Completa la funcionalidad de cada ejercicio siguiendo los comentarios
   2. Usa solo JavaScript vanilla (sin librerías externas)
   3. Sigue el patrón del Ejercicio 1 que está completado como ejemplo
   ========================================================================= */

/* ==============================================================
   Ejercicio 1 – Selectores y modificación (EJEMPLO COMPLETADO)
   ============================================================== */

// 1. Seleccionamos los elementos que vamos a usar
const contenido = document.getElementById('contenido');
const btnEj1 = document.getElementById('btn-ej1');

// 2. Añadimos el evento click al botón
btnEj1.addEventListener('click', function () {
    // Cambiar el texto del primer párrafo
    const primerParrafo = contenido.querySelector('p');
    primerParrafo.textContent = 'Este texto ha sido modificado con JavaScript';

    // Cambiar el color del segundo párrafo
    const segundoParrafo = contenido.querySelectorAll('p')[1];
    if (segundoParrafo) {
        segundoParrafo.style.color = 'blue';
    }

    // Añadir clase "resaltado" a todos los párrafos
    const todosLosParrafos = contenido.querySelectorAll('p');
    for (let i = 0; i < todosLosParrafos.length; i++) {
        todosLosParrafos[i].classList.add('resaltado');
    }
});

/* ============================================================
   TODO: Ejercicio 2 – Crear y eliminar elementos del DOM
   ============================================================ */

// TODO: 1. Seleccionar los botones con IDs: btn-add y btn-remove
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove'); 

// TODO: 2. Crear función para el botón "Añadir párrafo"
//         - Crear un nuevo elemento <p>
//         - Asignar texto: "Nuevo párrafo añadido"
//         - Añadir clase Bootstrap: "mb-2"
//         - Agregarlo al contenedor #contenido
//         - Aplicar eventos hover (función del ejercicio 3)
btnAdd.addEventListener('click', function() {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Nuevo párrafo añadido';
    nuevoParrafo.classList.add('mb-2');
    contenido.appendChild(nuevoParrafo);
    aplicarHover(nuevoParrafo); // Aplicar eventos hover al nuevo párrafo
});
btnRemove.addEventListener('click', function() {
    const parrafos = contenido.querySelectorAll('p');
    if (parrafos.length > 0) {
         const ultimoparrafo = parrafos[parrafos.length - 1];
        contenido.removeChild(ultimoparrafo);
    }
});
// TODO: 3. Crear función para el botón "Eliminar párrafo"
//         - Buscar todos los párrafos en #contenido
//         - Si hay párrafos, eliminar el último


/* ==========================================
   TODO: Ejercicio 3 – Eventos de ratón (hover)
   ========================================== */

// TODO: 1. Crear función para cuando entra el ratón
//         - Cambiar backgroundColor a '#e7f5ff'
function entrarRaton(event) {
    event.target.style.backgroundColor = '#e7f5ff';
}
// TODO: 2. Crear función para cuando sale el ratón
//         - Restaurar backgroundColor a ''
function salirRaton(event) {
    event.target.style.backgroundColor = '';
}

// TODO: 3. Crear función para aplicar eventos hover a un párrafo
//         - Usar addEventListener para 'mouseover' y 'mouseout'
function aplicarHover(parrafo) {
    parrafo.addEventListener('mouseover', entrarRaton);
    parrafo.addEventListener('mouseout', salirRaton);
}
// TODO: 4. Aplicar hover a todos los párrafos existentes inicialmente
const parrafosExistentes = contenido.querySelectorAll('p');
parrafosExistentes.forEach(parrafo => {
    aplicarHover(parrafo);
});

/* ======================================================
   TODO: Ejercicio 4 – Trabajar con inputs y formularios
   ====================================================== */

// TODO: 1. Seleccionar elementos: input (#nuevoTexto), botón (#btn-cambiar), mensaje error (#msg-ej4)
const inputNuevoTexto = document.getElementById('nuevoTexto');
const btnCambiar = document.getElementById('btn-cambiar');
const msgError = document.getElementById('msg-ej4');
// TODO: 2. Crear función para el botón "Cambiar texto"
//         - Obtener valor del input (usar .trim())
//         - Si está vacío: mostrar mensaje error, enfocar input
//         - Si tiene texto: ocultar error, cambiar texto del primer párrafo
btnCambiar.addEventListener('click', cambiarTexto); 

function cambiarTexto() {
    const nuevoTexto = inputNuevoTexto.value.trim();
    if(nuevoTexto === ""){
        msgError.classList.replace('d-none' , 'd-block');
    }else{
        msgError.classList.replace('d-none' , 'd-block');
        const nuevoParrafo = contenido.querySelector('p');
        if(nuevoParrafo){
            nuevoParrafo.textContent = nuevoTexto; 
        }
    }
}


/* ===================================================
   TODO: Ejercicio 5 – Lista de tareas (To-Do List)
   =================================================== */

// TODO: 1. Seleccionar elementos: input (#tareaInput), botones (#btn-tarea, #btn-borrar-completadas), lista (#listaTareas)
const tareaInput = document.getElementById('tareaInput');
const btnTarea = document.getElementById('btn-tarea');
const btnBorrarCompletadas = document.getElementById('btn-borrar-completadas');
const listaTareas = document.getElementById('listaTareas'); 
// TODO: 2. Función para añadir tarea
//         - Obtener texto del input
//         - Si no está vacío: crear <li>, añadir texto, agregar evento click para toggle clase 'completada'
//         - Limpiar input y enfocar
btnTarea.addEventListener('click', function() {
    const textoTarea = tareaInput.value.trim();
    if(textoTarea !== ""){
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = textoTarea;
        nuevaTarea.addEventListener('click', function() {
            nuevaTarea.classList.toggle('completada');
        });
        listaTareas.appendChild(nuevaTarea);
        tareaInput.value = '';
       
    }
});
// TODO: 3. Función para borrar tareas completadas
//         - Buscar todos los <li> con clase 'completada'
//         - Eliminar cada uno de la lista
btnBorrarCompletadas.addEventListener('click', function() {
    const tareasCompletadas = listaTareas.querySelectorAll('.completada');
    tareasCompletadas.forEach(function(tarea) {
        listaTareas.removeChild(tarea);
    });
}); 

/* ===================================================
   CONSEJOS PARA LOS ALUMNOS:
   
   - Usa console.log() para depurar tu código
   - Prueba cada función por separado antes de continuar
   - Recuerda usar IDs únicos para cada elemento
   - Las clases CSS ya están definidas en custom.css
   - Si algo no funciona, revisa la consola del navegador
   =================================================== */