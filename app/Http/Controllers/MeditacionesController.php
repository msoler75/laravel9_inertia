<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Meditacion;
use App\Pigmalion\SEO;
use App\Pigmalion\BusquedasHelper;

class MeditacionesController extends Controller
{
    //
    public function index(Request $request)
    {
        $buscar = $request->input('buscar');
        $categoria = $request->input('categoria');

        // devuelve los items recientes segun la busqueda
        if ($buscar) {
            $resultados = Meditacion::search($buscar);
        } else {
            // obtiene los items sin busqueda
            $resultados = Meditacion::select(['slug', 'titulo', 'descripcion', 'updated_at', 'categoria'])
                ->where('visibilidad', 'P')
                ->when($categoria === '_', function ($query) {
                    $query->orderByRaw('LOWER(titulo)');
                });
        }

        // parámetros
        if ($categoria)
            $resultados = $resultados->where('categoria', 'LIKE', "%$categoria%");

        $resultados = $resultados
            ->paginate(12)
            ->appends(['buscar' => $buscar,  'categoria' => $categoria]);

        if ($buscar)
            BusquedasHelper::formatearResultados($resultados, $buscar);

        $categorias = (new Meditacion())->getCategorias();

        return Inertia::render('Meditaciones/Index', [
            'categoriaActiva' => $categoria,
            'filtrado' => $buscar,
            'listado' => $resultados,
            'categorias'=>$categorias
        ])
            ->withViewData(SEO::get('meditaciones'));
    }



    public function show($id)
    {
        if (is_numeric($id)) {
            $meditacion = Meditacion::findOrFail($id);
        } else {
            $meditacion = Meditacion::where('slug', $id)->firstOrFail();
        }

        $borrador = request()->has('borrador');
        $publicado =  $meditacion->visibilidad == 'P';
        $editor = optional(auth()->user())->can('administrar contenidos');
        if (!$meditacion || (!$publicado && !$borrador && !$editor)) {
            abort(404); // Item no encontrado o no autorizado
        }

        return Inertia::render('Meditaciones/Meditacion', [
            'meditacion' => $meditacion,
        ])
            ->withViewData(SEO::from($meditacion));
    }
}
