<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Lugar;

class LugaresController extends Controller
{
    public function index(Request $request)
    {
        $listado = Lugar::select(['slug', 'nombre', 'imagen', 'categoria'])
            ->latest()->paginate(10);

        $todos = Lugar::select(['slug', 'nombre', 'categoria'])->take(100)->get();

        return Inertia::render('Lugares/Index', [
            'listado' => $listado,
            'todos' => $todos
        ]);
    }



    public function show($id)
    {
        $lugar = Lugar::where('slug', $id)
            ->orWhere('id', $id)
            ->firstOrFail();

        if (!$lugar) {
            abort(404); // Manejo de Centro no encontrada
        }

        return Inertia::render('Lugares/Lugar', [
            'lugar' => $lugar
        ]);
    }
}