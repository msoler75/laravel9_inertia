<?php


namespace App\Pigmalion;
use Illuminate\Support\Str;
use App\Models\Contenido;
use App\Models\ContenidoBaseModel;


class ContenidoHelper {

    public static function rellenarSlugImagenYDescripcion($objeto)
    {
        $fillable = $objeto->getFillable();

        // rellenamos slug si existe y está vacío
        if (in_array('slug', $fillable) && empty($objeto->slug)) {
            $candidatos = ["titulo", "nombre"];
            foreach ($candidatos as $campo) {
                if (in_array($campo, $fillable)) {
                    // $prefijo = $objeto->numero ? $objeto->numero . "-" : "";
                    $prefijo = '';
                    $objeto->slug = Str::slug($prefijo . $objeto->{$campo});
                    // dd($objeto->slug);
                    break;
                }
            }
        }
        if (!in_array('texto', $fillable)) return;

        $html = "";
        if ((in_array('imagen', $fillable) && empty($objeto->imagen))
            || (in_array('descripcion', $fillable) && empty($objeto->descripcion))
        ) {
            //$parsedown = new Parsedown();
            //$html = $parsedown->text($objeto->texto);
            $html = Str::markdown($objeto->texto ?? "");
        }
        // Rellenamos imagen (si está vacía) con el contenido del texto (si existe)
        if (in_array('imagen', $fillable) && empty($objeto->imagen)) {
            $matches = [];
            preg_match_all('/<img [^>]*src=["\']([^"\']+)/i', $html, $matches);

            // busca la primera imagen que tenga unas dimensiones minimas
            foreach ($matches[1] as $imageUrl) {

                if (!preg_match("/^https?:/", $imageUrl)) {

                    $imagePath = str_replace(url('/'), '', $imageUrl); // Obtener la ruta relativa de la imagen
                    $absolutePath = public_path($imagePath); // Obtener la ruta absoluta de la imagen

                    // Obtener las dimensiones de la imagen
                    $imageSize = getimagesize($absolutePath);
                    $imageWidth = $imageSize[0];
                    $imageHeight = $imageSize[1];

                    // Verificar las dimensiones mínimas requeridas (ancho y alto)
                    $minWidth = 300; // Ancho mínimo deseado
                    $minHeight = 250; // Alto mínimo deseado

                    if ($imageWidth >= $minWidth && $imageHeight >= $minHeight) {
                        $objeto->imagen = $imagePath;
                        break; // Salir del bucle después de encontrar la primera imagen adecuada
                    }
                }
            }
        }
        // generamos una descripción a partir del texto si es necesario
        if (in_array('descripcion', $fillable) && empty($objeto->descripcion)) {
            $descripcion = mb_substr(strip_tags($html), 0, 400 - 3);
            $descripcion = str_replace("\n", ' ', $descripcion); // Agregar espacio entre líneas
            $descripcion = rtrim($descripcion, "!,.-");
            $descripcion = substr($descripcion, 0, strrpos($descripcion, ' ')) . '...';
            $objeto->descripcion = $descripcion;
        }

        // revisa si el campo de "visibilidad" de la publicación tiene la fecha a NULL
        if (in_array('visibilidad', $fillable) && in_array('published_at', $fillable)) {
            if ($objeto->visibilidad != "B" && !$objeto->published_at)
                $objeto->published_at = date('Y-m-d H:i:s');
        }
    }


    public static function guardarContenido(string $coleccion, ContenidoBaseModel $model)
    {
        $contenido = Contenido::where('coleccion', $coleccion)
            ->where('id_ref', $model->id)->first();

        if ($contenido == null) {
            // Crear un nuevo modelo Contenido
            $contenido = new Contenido();
            $contenido->coleccion = $coleccion;
            $contenido->id_ref = $model->id;
        }

        // Asignar las propiedades del modelo con los datos recibidos
        $contenido->titulo = $model->titulo ?? $model->nombre;
        $contenido->slug_ref = $model->slug ?? $model->ruta ?? null;
        $contenido->descripcion = $model->descripcion ?? ($model->pais . " " . $model->poblacion);
        $contenido->imagen = $model->imagen ?? null;
        $contenido->fecha = $model->published_at ?? $model->updated_at ?? null;
        $contenido->visibilidad = $model->visibilidad ?? 'P';

        // obtiene el texto que servirá para indexar el buscador
        $contenido->texto_busqueda = $model->getTextoBuscador();

        // Guardar el modelo en la base de datos
        $contenido->save();
    }


    public static function removerContenido($objeto)
    {
        $coleccion = $objeto->table;
        $contenido = Contenido::where('coleccion', $coleccion)
            ->where('id_ref', $objeto->id);

        if ($contenido) {
            // elimina el contenido asociado
            $contenido->delete();
        }
    }
}