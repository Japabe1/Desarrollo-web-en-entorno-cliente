<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(table: 'peliculas',callback: function (Blueprint $table): void {
            $table->id();
            $table->string(column: 'nombre');
            $table->foreignId(column: 'categoria_id')->constrained(table: 'categorias')->onDelete(action: 'cascade');
            $table->string(column: 'imagen')->nullable();
            $table->string(column: 'url_imdb')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peliculas');
    }
};
