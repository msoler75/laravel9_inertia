<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permiso extends Model
{
    use HasFactory;


    protected $table = 'permisos';

    protected $fillable = [
        'user_id', 'team_id', 'modelo', 'modelo_id', 'accion', 'permitido'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function team()
{
    return $this->belongsTo(Team::class);
}
}