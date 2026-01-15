<?php

namespace App\Http\Controllers;

use App\Models\Pelicula;
use App\Models\Categoria;
use Illuminate\Http\Request;

class PeliculaController extends Controller
{
    public function portada()
    {
        $categorias = Categoria::all();
        return view('peliculas.portada', compact('categorias'));
    }

    public function list(){
        $peliculas = Pelicula::with('categoria')->get();
        return response()->json($peliculas);
    }

    public function show($id){
        $pelicula = Pelicula::with('categoria')->find($id);
        if(!$pelicula){
            return response()->json(['error' => 'Película no encontrada'], 404);
        }
        return response()->json($pelicula);
    }
}
