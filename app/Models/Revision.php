<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

/**
 * Access control List
 *
 * Sirve para permisos a Nodos de los usuarios
 */
class Revision extends Model
{
    use CrudTrait;

    protected $table = 'revisions';
    protected $fillable = [''];



    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // ACCESSORS

    public function getColeccionAttribute()
    {
        $coleccion = str_replace("App\\Models\\", "", $this->revisionable_type);
        $coleccion = strtolower($coleccion) . "s";
        return $coleccion;
    }

    public function getContenidoUrlAttribute()
    {
        return '/' . $this->coleccion . "/" . $this->revisionable_id;
    }


    public function getAutorAttribute()
    {
        $user = $this->user;
        return $user->name;
    }

    public function getTituloContenidoAttribute()
    {
        // Carga dinámica de la clase del modelo
        $modelClass = app()->make($this->revisionable_type);

        // Carga del registro específico con el ID dado
        $contenido = $modelClass::withTrashed()->find($this->revisionable_id);

        if ($contenido)
            return $contenido->titulo ?? $contenido->nombre ?? $contenido->ruta ?? "";
        return "";
    }

    public function getOperacionAttribute()
    {
        if ($this->key == 'created_at')
            return "🔨 Creado";
        if ($this->key == 'deleted_at')
            return "🗑️ Borrado";
        return "Modificado";
    }

    public function getRevisionUrlAttribute() {
        return "/admin/".rtrim($this->coleccion, "s")."/{$this->revisionable_id}/revise";
    }

}
