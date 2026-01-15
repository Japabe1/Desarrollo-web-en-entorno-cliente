<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categoria;
use App\Models\Pelicula;

class PeliculasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Crear categorias
        $accion = Categoria::create(['nombre' => 'Acción']);
        $comedia = Categoria::create(['nombre' => 'Comedia']);
        $drama = Categoria::create(['nombre' => 'Drama']);
        $terrror = Categoria::create(['nombre' => 'Terror']);
        $cienciaFiccion = Categoria::create(['nombre' => 'Ciencia Ficción']);
        $animancion = Categoria::create(['nombre' => 'Animación']);

        //Crear peliculas de ejemplo
        $peliculas = [
            //Acción 3
            ['nombre' => 'Mad Max: Fury Road', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTUyMTE0ODcxNF5BMl5BanBnXkFtZTgwODE4NDQzNTE@._V1_FMjpg_UY2048_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1392190/'],
            ['nombre' => 'John Wick', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BN2IzYzJiOTgtZWI3Ni00NzgzLTg3YzYtZDRiZTYzZmNmMmQwXkEyXkFqcGc@._V1_FMjpg_UY1800_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt2911666/'],
            ['nombre' => 'The Dark Knight', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTIzMDc4MzA2Ml5BMl5BanBnXkFtZTcwODU0MzA3MQ@@._V1_FMjpg_UX510_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0468569/'],
            //Comedia 3
            ['nombre' => 'Superbad', 'categoria_id' => $comedia->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNmI3YjY4NTAtZjE0Yy00ODNjLTk3ZmQtMDY1M2QxYjM3YzVkXkEyXkFqcGc@._V1_FMjpg_UX420_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0829482/'],
            ['nombre' => 'The Hangover', 'categoria_id' => $comedia->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_FMjpg_UX490_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1119646/'],
            ['nombre' => 'Step Brothers', 'categoria_id' => $comedia->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BYWNiOGZkOTgtNGMzMC00MDg5LTliM2UtN2VjMDI3N2ViOWE5XkEyXkFqcGc@._V1_FMjpg_UX1079_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0838283/'],
            //Drama 3
            ['nombre' => 'The Shawshank Redemption', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTA1MjE0Nzk4MDleQTJeQWpwZ15BbWU4MDA0NjIxMjAx._V1_FMjpg_UX364_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0111161/'],
            ['nombre' => 'Forrest Gump', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BM2JmYjc5MWEtNjY1MS00NGQwLTlhMWEtMGM1YjkxODllMmYyXkEyXkFqcGc@._V1_FMjpg_UY2965_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0109830/'],
            ['nombre' => 'Fight Club', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNGE0YjI3MzQtNmUyNi00YTY4LTgzNDItMTc3MDcyYTc3ZmY3XkEyXkFqcGc@._V1_FMjpg_UX1079_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0137523/'],
            //Terror 3
            ['nombre' => 'The Conjuring', 'categoria_id' => $terrror->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BM2U2NGE1OWQtN2FjNi00YmQ2LTliMDAtNzMyYzQ5YTJiNDFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1457767/'],
            ['nombre' => 'Get Out', 'categoria_id' => $terrror->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BM2NjNGRkZjItMDIzMy00ODRmLThjNzgtNjA1MGVhMzY0MzMzXkEyXkFqcGc@._V1_FMjpg_UY2362_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt5052448/'],
            ['nombre' => 'A Quiet Place', 'categoria_id' => $terrror->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMDdkNjk3ZDktMzJmZC00OGNhLWJhYTUtY2U3ZTQ1NzM3NDY5XkEyXkFqcGc@._V1_FMjpg_UX750_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt6644200/'],
            //Ciencia Ficción 3
            ['nombre' => 'Inception', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTI4NDk5NDgzN15BMl5BanBnXkFtZTcwNzU0OTk1Mw@@._V1_FMjpg_UY2048_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1375666/'],
            ['nombre' => 'The Matrix', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BN2M2MWI1YmItNzQwOS00ZmNhLWJmZjYtZDFhNTE2NzUzZDgxXkEyXkFqcGc@._V1_FMjpg_UX220_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0133093/'],
            ['nombre' => 'Interstellar', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMmQ0ZmNkMzUtMmUwOS00Y2IwLTg1ZTctNzM1MWU1YTAwMzMzXkEyXkFqcGc@._V1_FMjpg_UY2054_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0816692/'],
            //Animación 3
            ['nombre' => 'Toy Story', 'categoria_id' => $animancion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_FMjpg_UX1005_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0114709/'],
            ['nombre' => 'Finding Nemo', 'categoria_id' => $animancion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTJiOGJmM2YtODA0Zi00MDJmLTk5ZWItYjJkNjhiODdmMmE1XkEyXkFqcGc@._V1_FMjpg_UX450_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0263854/'],
            ['nombre' => 'The Lion King', 'categoria_id' => $animancion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNTA4ODU2NDctNjM5Mi00MGJhLThiN2QtMjY0ZmQ5Y2M3ODA4XkEyXkFqcGc@._V1_FMjpg_UX1015_.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0110357/'],
        ];

        foreach ($peliculas as $peliculaData) {
            Pelicula::create($peliculaData);
        }

        $this->command->info('Se han creado las categorías y películas de ejemplo correctamente.');
    }
}
