<?php

namespace App\Http\Controllers\Api;

// use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comentario;

class ComentariosController extends Controller
{
    public function index(Request $request)
    {
        // funcionan ambos métodos
        // $user = auth()->user();
        // $user = $request->user();
        // dd($user);

        $cid = $request->input('contenido_id') ?? "";

        if (!$cid)
            return response()->json([
                'error' => 'debe especificar contenido_id'
            ], 400);

        // obtenemos todos los comentarios de la base de datos
        $comentarios = Comentario::join('users', 'comentarios.user_id', '=', 'users.id')
            ->where('contenido_id', $cid)
            ->select('comentarios.*', 'users.name as user_name', 'users.profile_photo_path as user_photo')
            ->get()
            ->toArray();


        // funciones auxiliares
        function buscar_respuestas($comentarios, $comentario_id)
        {
            $respuestas = [];

            foreach ($comentarios as $comment) {
                if ($comment['respuesta_a'] == $comentario_id) {
                    $respuestas[] = $comment;
                }
            }

            return $respuestas;
        }

        function agregar_comentario($comentarios, $comentario)
        {
            $comentario_anidado = [
                'id' => $comentario['id'],
                'texto' => $comentario['texto'],
                'fecha' => $comentario['created_at'],
                'autor' => [
                    'id' => $comentario['user_id'],
                    'nombre' => $comentario['user_name'],
                    'imagen' => $comentario['user_photo']
                ],
                'respuestas' => []
            ];

            // Buscamos y agregamos las respuestas al comentario anidado
            $respuestas = buscar_respuestas($comentarios, $comentario['id']);
            foreach ($respuestas as $respuesta) {
                $comentario_anidado['respuestas'][] = agregar_comentario($comentarios, $respuesta);
            }

            return $comentario_anidado;
        }

        // creamos el árbol de comentarios
        $arbol_comentarios = [];

        foreach ($comentarios as $idx => $comment) {
            if (!$comment['respuesta_a']) { // Si es un comentario raíz
                $comentario = [
                    'id' => $comment['id'],
                    'texto' => $comment['texto'],
                    'fecha' => $comment['created_at'],
                    'autor' => [
                        'id' => $comment['user_id'],
                        'nombre' => $comment['user_name'],
                        'imagen' => $comment['user_photo']
                    ],
                    'respuestas' => []
                ];

                // Buscamos y agregamos las respuestas al comentario raíz
                $respuestas = buscar_respuestas($comentarios, $comment['id']);
                foreach ($respuestas as $respuesta) {
                    $comentario['respuestas'][] = agregar_comentario($comentarios, $respuesta);
                }

                // Agregamos el comentario raíz al árbol
                $arbol_comentarios[] = $comentario;
            }
        }

        return response()->json([
            'comentarios' => $arbol_comentarios
        ], 200);
    }


    public function create(Request $request)
    {
        $contenido_id = $request->contenido_id;
        $respuesta_a = $request->respuesta_a ?? null;
        $texto = $request->texto;

        if (!$texto || !$contenido_id) {
            return response()->json(['error' => 'Faltan parámetros'], 400);
        }

        // dd(Auth::user());
        //dd($contenido_id);

         /* return response()->json(
            [],
            404
        ); */

        $comentario = new Comentario;
        $comentario->texto = $texto;
        $comentario->contenido_id = $contenido_id;
        $comentario->user_id = auth()->user()->id; // Asignar el ID del usuario autenticado
        $comentario->respuesta_a = $respuesta_a;
        $comentario->save();

        return response()->json(
            $comentario->toArray(),
            200
        );
    }
}

/*


  const commentsData = [
    {
      id: 1,
      author: {id: 1, name:'Ana', avatar:'https://via.placeholder.com/480x480.png/00ee33'},
      date: 1631299213,
      content: '¡Gran artículo!',
      replies: [
        {
          id: 2,
          author: {id: 2, name:'Jorge', avatar:'https://via.placeholder.com/480x480.png/ffee33'},
          date: 1631492213,
          content: 'Gracias por compartir',
          replies: []
        },
        {
          id: 3,
          author: {id: 1, name:'Ana', avatar:'https://via.placeholder.com/480x480.png/00ee33'},
          date: 1674699213,
          content: 'Estoy de acuerdo contigo',
          replies: [
            {
              id: 4,
              author: {id: 3, name:'Jaime', avatar:'https://via.placeholder.com/480x480.png/040ef3'},
              date: 1681299213,
              content: '¡Me alegra que estés de acuerdo!',
              replies: []
            }
          ]
        }
      ]
    },
    {
      id: 5,
      author: {id: 1, name:'Ana', avatar:'https://via.placeholder.com/480x480.png/00ee33'},
      date: 1631299213,
      content: 'Ah!, y añadir: qué interesante perspectiva',
      replies: []
    }
  ];

*/