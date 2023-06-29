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
        Schema::create('radio', function (Blueprint $table) {
            $table->id();
            $table->string('audio', 255);
            $table->integer('duracion')->nullable();
            $table->string('categoria', 64);
            $table->tinyInteger('desactivado')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Schema::dropIfExists('radio');
    }
};
