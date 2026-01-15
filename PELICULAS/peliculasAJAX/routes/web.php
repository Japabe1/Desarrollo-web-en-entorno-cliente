<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PeliculaController;
use App\Http\Controllers\CategoriaController;

//Portada pública
Route::get('/',[PeliculaController::class,'portada'])->name('portada');

Route::prefix('api')->group(function (){

    //Peliculas
    Route::get('/peliculas',[PeliculaController::class,'list'])->name('api.peliculas.list');
    Route::get('/peliculas/{id}',[PeliculaController::class,'show'])->name('api.peliculas.show');

    Route::get('/categorias/{id}/peliculas',[CategoriaController::class,'peliculas'])->name('api.categorias.peliculas');
});
