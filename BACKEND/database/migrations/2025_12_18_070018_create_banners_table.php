<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slogan');
            $table->string('image')->nullable();

            // Propiedades del botón
            $table->enum('type', ['button', 'wtsp-button'])->nullable();
            $table->string('name')->nullable();
            $table->string('number')->nullable();
            $table->text('message')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
