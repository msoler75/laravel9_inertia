<?php

namespace App\Pigmalion;

use RalphJSmit\Laravel\SEO\Support\SEOData;

class SEO
{

    public static function get($route)
    {
        $data = [
            'quienes-somos' => [
                'title' => 'Quienes Somos en Tseyor',
                'description' => 'Conoce quienes somos y lo que hacemos'
            ],
            'filosofia' => [
                'title' => 'Filosofía de Tseyor',
                'description' => 'Conoce la filosofía que proviene de las estrellas'
            ],
            'origenes-de-tseyor' => [
                'title' => 'Orígenes de Tseyor',
                'description' => 'Conoce el punto de partida y los primeros contactos extraterrestres'
            ],
            'noticias' => [
                'title' => 'Noticias de Tseyor',
                'description' => 'Anuncios e información relevante de la comunidad Tseyor'
            ],
            'novedades' => [
                'title' => 'Novedades de Tseyor',
                'description' => 'Consulta los últimos comunicados, libros, blogs, noticias y eventos de TSEYOR'
            ],
            'lugares' => [
                'title' => 'Lugares de la Galaxia',
                'description' => 'Planetas, bases y otros lugares relacionados con TSEYOR'
            ],
            'guias' => [
                'title' => 'Guías Estelares de Tseyor',
                'description' => 'Compendio de todos los tutores intergalácticos de Tseyor'
            ],
            'eventos' => [
                'title' => 'Eventos Tseyor',
                'description' => 'Cursos, encuentros, charlas y convivencias de Tseyor'
            ],
            'libros' => [
                'title' => 'Libros de Tseyor',
                'description' => 'El mensaje de las estrellas en temas monográficos y de consulta'
            ],
            'entradas' => [
                'title' => 'Blogs Tseyor',
                'description' => 'Artículos y crónicas de la vida en la comunidad Tseyor'
            ],
            'cursos' => [
                'title' => 'Cursos Tseyor',
                'description' => 'Aprende la filosofía de Tseyor con nuestro curso gratuito'
            ],
            'contactos' => [
                'title' => 'Mapa de Contactos de Tseyor',
                'description' => 'Encuentra Tseyor cerca de ti',
            ],
            'comunicados' => [
                'title' => 'Comuicados de Tseyor',
                'description' => 'Conversaciones telepáticas con los hermanos de las estrellas',
            ],
            'centros' => [
                'title' => 'Centros de Tseyor',
                'description' => 'Casas, Muulasterios y Pueblos Tseyor',
            ],
            'audios' => [
                'title' => 'Audios de Tseyor',
                'description' => 'Talleres, meditaciones, reflexiones y música dimanados de las estrellas'
            ],
            'videos' => [
                'title' => 'Videos de Tseyor',
                'description' => 'Cuentos, encuentros, meditaciones, reflexiones y música'
            ],
            'cursos.inscripcion'=> [
                'title' =>'Inscripción al Curso Holístico TSEYOR',
                'description' => 'Rellena los datos para que puedas recibir este curso completamente gratuito'
            ],
            'radio'=> [
                'title' =>'Radio Tseyor',
                'description' => 'Escucha comunicados, talleres, meditaciones, charlas, tertilias...'
            ]

        ];

        $obj = $data[$route] ?? [
            'title' => 'Tseyor',
        ];


        return  [
            'seo' => new SEOData(
                title: $obj['title'],
                description: $obj['description'] ?? null,
                image: $obj['image'] ?? null
            )
        ];
    }


    public static function from($model)
    {
        return ['seo' =>$model];
    }
}