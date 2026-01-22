
<!doctype html>
<html lang="en">
<head>
    <title>Películas - Portada</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.3.2 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

    <style>
        /* Animaciones CSS */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes skeleton-loading {
            0% {
                background-color: #e0e0e0;
            }
            50% {
                background-color: #f0f0f0;
            }
            100% {
                background-color: #e0e0e0;
            }
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes scaleIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        /* Estilos base */
        .pelicula-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            animation: fadeIn 0.5s ease-in-out;
        }

        .pelicula-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }

        .pelicula-img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            transition: opacity 0.3s ease;
        }

        .pelicula-card:hover .pelicula-img {
            opacity: 0.9;
        }

        .categoria-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 10;
            animation: slideInUp 0.4s ease;
        }

        /* Skeleton Screen */
        .skeleton {
            animation: skeleton-loading 1.5s infinite;
            border-radius: 0.25rem;
        }

        .skeleton-card {
            animation: fadeIn 0.5s ease-in-out;
        }

        .skeleton-img {
            width: 100%;
            height: 400px;
            border-radius: 0.375rem 0.375rem 0 0;
            margin-bottom: 0;
        }

        .skeleton-title {
            height: 1.5rem;
            margin-top: 1rem;
            width: 80%;
        }

        .skeleton-button {
            height: 2.5rem;
            margin-top: 1.5rem;
            width: 100%;
        }

        /* Modal */
        .modal.fade.show {
            animation: slideInUp 0.3s ease-out;
        }

        .modal-content {
            animation: scaleIn 0.3s ease-out;
            border: none;
            border-radius: 0.5rem;
        }

        .modal-header {
            border-bottom: 1px solid #e0e0e0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .modal-header .btn-close {
            filter: brightness(0) invert(1);
        }

        /* Transiciones suaves */
        .fade-transition {
            transition: opacity 0.3s ease;
        }

        .slide-transition {
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* Botón reset */
        .btn-reset {
            transition: all 0.3s ease;
        }

        .btn-reset:hover {
            transform: rotate(5deg);
        }
    </style>
</head>

<body class="bg-light">
<nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <a href="" class="navbar-brand">
            <i class="bi bi-film"></i> Catalogo de Películas
        </a>
        <div>
            <a href="" class="btn btn-outline-light btn-sm me-2">
                <i class="bi bi-tags"></i> Categorías
            </a>
            <a href="" class="btn btn-outline-light btn-sm">
                <i class="bi bi-gear"></i> Películas
            </a>
        </div>
    </div>
</nav>

<div class="container my-5">
    <!-- Filtro de Categorías -->
    <div class="row mb-4">
        <div class="col-md-12">
            <div class="card shadow">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <h5 class="mb-0">
                                <i class="bi bi-funnel"></i> Filtrar por categorías
                            </h5>
                        </div>
                        <div class="col-md-6">
                            <select id="categoriaSelect" class="form-select form-select-lg" >
                                <option value="">-- Todas las categorías --</option>
                                @foreach($categorias as $categoria)
                                    <option value="{{ $categoria->id }}">{{ $categoria->nombre }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-3 text-end">
                            <button id="btnReset" class="btn btn-outline-danger btn-reset" title="Limpiar filtros">
                                <i class="bi bi-arrow-counterclockwise"></i> Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Área de Películas -->
    <div id="areaPeliculas"></div>

    <!-- Skeleton Screen -->
    <div class="d-none" id="skeletonLoader">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            <div class="col">
                <div class="card skeleton-card h-100">
                    <div class="skeleton skeleton-img"></div>
                    <div class="card-body">
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-button mt-3"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card skeleton-card h-100">
                    <div class="skeleton skeleton-img"></div>
                    <div class="card-body">
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-button mt-3"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card skeleton-card h-100">
                    <div class="skeleton skeleton-img"></div>
                    <div class="card-body">
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-button mt-3"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card skeleton-card h-100">
                    <div class="skeleton skeleton-img"></div>
                    <div class="card-body">
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-button mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<footer class="bg-dark text-white text-center py-3">
    <div class="container">
        <p class="mb-0">&copy; 2026 Catalogo de Películas. Todos los derechos reservados.</p>
    </div>
</footer>

<!-- Modal para detalles de película -->
<div class="modal fade" id="modalPelicula" tabindex="-1" aria-labelledby="modalPeliculaLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalPeliculaLabel">Detalles de la Película</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="modalPeliculaBody">
                <div class="text-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    cargarTodasPeliculas();
});

// Event Listeners
document.getElementById('categoriaSelect').addEventListener('change', function() {
    cargarPeliculasPorCategoria();
});

document.getElementById('btnReset').addEventListener('click', function() {
    resetearFiltros();
});

function mostrarSkeleton() {
    document.getElementById('skeletonLoader').classList.remove('d-none');
    document.getElementById('areaPeliculas').innerHTML = '';
}

function ocultarSkeleton() {
    document.getElementById('skeletonLoader').classList.add('d-none');
}

// Función para resetear filtros
function resetearFiltros() {
    document.getElementById('categoriaSelect').value = '';
    cargarTodasPeliculas();
}

// Función para cargar todas las películas
async function cargarTodasPeliculas() {
    try {
        mostrarSkeleton();
        const response = await fetch('/api/peliculas');
        if(!response.ok) throw new Error('Error en la respuesta de la API');
        const peliculas = await response.json();

        // Esperar 1 segundo para que se vea el spinner
        await new Promise(resolve => setTimeout(resolve, 1000));

        mostrarPeliculas(peliculas, 'Todas las Películas');
    } catch(error) {
        console.error('Error al cargar las películas:', error);
        mostrarError('Error al cargar las películas. Por favor, inténtelo de nuevo más tarde.');
    } finally {
        ocultarSkeleton();
    }
}

// Función para cargar por categoría
async function cargarPeliculasPorCategoria() {
    const categoriaId = document.getElementById('categoriaSelect').value;
    if(!categoriaId) {
        cargarTodasPeliculas();
        return;
    }
    try {
        mostrarSkeleton();
        const response = await fetch(`/api/categorias/${categoriaId}/peliculas`);
        if(!response.ok) throw new Error('Error al cargar las películas por categoría');
        const peliculas = await response.json();

        // Esperar 1 segundo para que se vea el spinner
        await new Promise(resolve => setTimeout(resolve, 1000));

        const categoriaTexto = document.getElementById('categoriaSelect').selectedOptions[0].text;
        mostrarPeliculas(peliculas, `Películas de la categoría: ${categoriaTexto}`);
    } catch(error) {
        mostrarError('Error al cargar las películas por categoría. Por favor, inténtelo de nuevo más tarde.');
    } finally {
        ocultarSkeleton();
    }
}

// Función para mostrar las películas en tarjetas
function mostrarPeliculas(peliculas, titulo) {
    const areaPeliculas = document.getElementById('areaPeliculas');
    areaPeliculas.innerHTML = '';

    if (peliculas.length === 0) {
        areaPeliculas.innerHTML = `
            <div class="alert alert-info text-center fade-transition" role="alert">
                <i class="bi bi-info-circle fs-1"></i>
                <h4 class="mt-3">No hay películas de esta categoría</h4>
                <p>Intente con otra categoría o ver todas las películas.</p>
            </div>`;
        return;
    }

    let html = `
        <div class="mb-4 fade-transition">
            <h2 class="text-center">
                <i class="bi bi-film"></i> ${titulo}
                <span class="badge bg-primary fs-5">${peliculas.length}</span>
            </h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
    `;

    peliculas.forEach((pelicula, index) => {
        const imagenPelicula = pelicula.imagen || 'https://placehold.co/300x400?text=Sin+Imagen';
        const categoriaNombre = pelicula.categoria ? pelicula.categoria.nombre : 'Sin categoría';

        html += `
            <div class="col" style="animation-delay: ${index * 0.05}s;">
                <div class="card pelicula-card h-100 shadow-sm" onclick="abrirModalPelicula(${pelicula.id}, '${pelicula.nombre.replace(/'/g, "\\'")}')">
                    <div class="position-relative">
                        <span class="badge bg-primary categoria-badge">${categoriaNombre}</span>
                        <img src="${imagenPelicula}" alt="${pelicula.nombre}" class="pelicula-img card-img-top"
                            onerror="this.src='https://placehold.co/300x400?text=Error+al+Cargar'">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${pelicula.nombre}</h5>
                        <div class="mt-auto">
                            ${pelicula.url_imdb ? `
                                <a href="${pelicula.url_imdb}" target="_blank" class="btn btn-warning w-100 slide-transition" onclick="event.stopPropagation();">
                                    <i class="bi bi-link-45deg"></i> Ver en IMDB
                                </a>` : `
                                <button class="btn btn-secondary w-100" disabled>
                                    <i class="bi bi-x-circle"></i> Sin enlace IMDB
                                </button>`}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    areaPeliculas.innerHTML = html;
}

// Función para abrir el modal con detalles de la película
async function abrirModalPelicula(peliculaId, nombrePelicula) {
    const modal = new bootstrap.Modal(document.getElementById('modalPelicula'));
    const modalBody = document.getElementById('modalPeliculaBody');

    // Mostrar el spinner mientras carga
    modalBody.innerHTML = `
        <div class="text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Cargando...</span>
            </div>
        </div>
    `;
    modal.show();

    try {
        const response = await fetch(`/api/peliculas/${peliculaId}`);
        if(!response.ok) throw new Error('Error al cargar los detalles');

        const pelicula = await response.json();
        const imagenPelicula = pelicula.imagen || 'https://placehold.co/300x400?text=Sin+Imagen';
        const categoriaNombre = pelicula.categoria ? pelicula.categoria.nombre : 'Sin categoría';

        // Esperar 1 segundo para mostrar el spinner
        await new Promise(resolve => setTimeout(resolve, 1000));

        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${imagenPelicula}" alt="${pelicula.nombre}" class="img-fluid rounded" style="width: 100%;">
                    <div class="mt-3">
                        <span class="badge bg-primary">${categoriaNombre}</span>
                    </div>
                </div>
                <div class="col-md-8">
                    <h4>${pelicula.nombre}</h4>
                    ${pelicula.descripcion ? `<p class="text-muted"><strong>Descripción:</strong><br>${pelicula.descripcion}</p>` : ''}
                    ${pelicula.anio ? `<p><strong>Año:</strong> ${pelicula.anio}</p>` : ''}
                    ${pelicula.duracion ? `<p><strong>Duración:</strong> ${pelicula.duracion} minutos</p>` : ''}
                    ${pelicula.director ? `<p><strong>Director:</strong> ${pelicula.director}</p>` : ''}
                    ${pelicula.actores ? `<p><strong>Actores:</strong> ${pelicula.actores}</p>` : ''}
                    ${pelicula.puntuacion ? `<p><strong>Puntuación:</strong> <span class="badge bg-warning text-dark">${pelicula.puntuacion}/10</span></p>` : ''}
                    <div class="mt-4">
                        ${pelicula.url_imdb ? `
                            <a href="${pelicula.url_imdb}" target="_blank" class="btn btn-warning me-2">
                                <i class="bi bi-link-45deg"></i> Ver en IMDB
                            </a>
                        ` : ''}
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            <i class="bi bi-x-circle"></i> Cerrar
                        </button>
                    </div>
                </div>
            </div>
        `;
    } catch(error) {
        console.error('Error:', error);
        modalBody.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <i class="bi bi-exclamation-triangle"></i>
                Error al cargar los detalles de la película. Por favor, intente de nuevo.
            </div>
        `;
    }
}

// Función para mostrar errores
function mostrarError(mensaje) {
    const areaPeliculas = document.getElementById('areaPeliculas');
    areaPeliculas.innerHTML = `
        <div class="alert alert-danger text-center fade-transition" role="alert">
            <i class="bi bi-exclamation-triangle fs-1"></i>
            <h4 class="mt-3">¡Error!</h4>
            <p>${mensaje}</p>
            <button class="btn btn-danger" onclick="cargarTodasPeliculas()">
                <i class="bi bi-arrow-clockwise"></i> Reintentar
            </button>
        </div>
    `;
}
</script>

</body>
</html>
