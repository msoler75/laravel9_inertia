<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use RalphJSmit\Laravel\SEO\Support\HasSEO;
use RalphJSmit\Laravel\SEO\Support\SEOData;
use Carbon\Carbon;
use App\Traits\EsContenido;

/*
 ContenidoBaseModel es un modelo básico que sirve para:
 - SEO
 - Gestionar una base para los contenidos con el trait EsContenido
 */

class ContenidoBaseModel extends Model
{
    use HasSEO;
    use EsContenido;

    // https://github.com/ralphjsmit/laravel-seo
    public function getDynamicSEOData(): SEOData
    {
        $image = $this->imagen ? url($this->imagen) :  env('META_IMAGE_DEFAULT', null);
        return new SEOData(
            title: $this->titulo ?? $this->nombre ?? $this->name && null,
            description: $this->descripcion ?? mb_substr(strip_tags($this->texto ?? ""), 0, 400 - 3),
            image: $image,
            author: $this->autor ?? 'tseyor',
            published_time: Carbon::createFromFormat('Y-m-d H:i:s', $this->published_at ?? $this->created_at) ?? null,
            section: $this->categoria ?? ''
            // tags:
            // schema:
        );
    }


    /**
     * Función heredable para cada modelo, sirve para indicarle al buscador global qué texto o palabras clave indexan este contenido
     */
    public function getTextoBuscador()
    {
        return null;
    }
}