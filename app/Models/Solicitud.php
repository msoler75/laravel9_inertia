<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    use CrudTrait;

    protected $table="solicitudes";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', // usuario que realiza la solicitud
        'equipo_id', // equipo donde realiza la solicitud de ingreso
        'por_user_id', // usuario que acepta o deniega la solicitud
        'fecha_aceptacion',
        'fecha_denegacion'
    ];

    /**
     * Get the usuario that sent the peticion.
     */
    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    /**
     * Get the equipo that owns the peticion.
     */
    public function equipo()
    {
        return $this->belongsTo(Equipo::class, 'equipo_id', 'id');
    }

      /**
     * Get the user that answered the peticion.
     */
    public function coordinador()
    {
        return $this->belongsTo(User::class, 'por_user_id', 'id');
    }



    // accesors
    public function getNombreEquipoAttribute()
    {
        return optional($this->equipo)->nombre;
    }


    public function getNombreUsuarioAttribute()
    {
        return optional($this->usuario)->name;
    }

    public function getNombreCoordinadorAttribute()
    {
        return optional($this->coordinador)->name;
    }



}
