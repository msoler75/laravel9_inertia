<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use App\Models\ContenidoBaseModel;

class Termino extends ContenidoBaseModel
{
    use CrudTrait;

    protected $table = 'terminos';

    protected $fillable = [
        'nombre',
        'slug',
        'descripcion',
        'texto',
        'visibilidad'
    ];


    /**
     * Función heredable para cada modelo
     */
    public function getTextoContenidoBuscador()
    {
        return html_entity_decode(strip_tags($this->texto));
    }
}
