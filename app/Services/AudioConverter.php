<?php

namespace App\Services;

// use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use App\Pigmalion\StorageItem;
use Illuminate\Support\Facades\Storage;

/**
 * Convierte el audio a un formato mp3 de menos peso
 */
class AudioConverter
{
    public string $source;
    public string $destination;
    public string $disk;

    /**
     * Esta es la función principal a la que podemos llamar desde un controlador CRUD de backpack
     */
    public function __construct(string $audioFilePath, string $destinationFilePath, string $disk = 'public')
    {
        $this->source = $audioFilePath;
        $this->destination = $destinationFilePath;
        $this->disk = $disk;
        // dd($this->source, $this->destination);
    }


    public function convert()
    {
        // Obtener la URL de la variable de entorno
        $converterUrl = config('services.audio_converter.url');

        if (!$converterUrl)
            throw new \Exception("Servidor de conversión de audio no configurado");

        Log::channel('jobs')->info("Inicia la conversión del archivo '{$this->source}' a '{$this->destination}'");

        $frecuencia = config('services.audio_converter.frecuencia');
        $kbps = config('services.audio_converter.kbps');

        $sourcePath = realpath((new StorageItem($this->source))->path);
        $destinationPath = (new StorageItem($this->destination))->path;

        Log::channel('jobs')->info("archivo fuente: " . $sourcePath);
        Log::channel('jobs')->info("archivo destino: " . $destinationPath);

        // Verificar si el archivo existe
        if (!file_exists($sourcePath))
            throw new \Exception("El archivo {$sourcePath} no existe en el disco de almacenamiento");

        // Realizar la petición al servidor para convertir el archivo .docx a markdown
        $curl = curl_init();

        if (filesize($sourcePath) < 30000) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $finfo = finfo_file($finfo, $sourcePath);

            $cFile = new \CURLFile($sourcePath, $finfo, basename($sourcePath));
            $postData = array("file" => $cFile, "filename" => $cFile->postname);
        } else {

            // Extraer la parte relativa a la ruta de almacenamiento
            $relativePath = str_replace(realpath(storage_path('app/public')), '', $sourcePath);

            // Asegurarse de que la ruta relativa no tenga una barra inicial
            $relativePath = ltrim($relativePath, '/');

            // Obtener la URL base de la aplicación
            $baseUrl = config('app.url');

            // Construir la URL pública
            $publicUrl = rtrim($baseUrl, '/') . '/almacen' . '/' . ltrim($relativePath, '/');

            Log::channel('jobs')->info("base: " . $relativePath . "  url : " . $publicUrl);
            $postData = array("url" => $publicUrl);
            Log::channel('jobs')->info("postData: " . json_encode($postData));
        }

        Log::channel('jobs')->info("Llamando a $converterUrl?frecuencia={$frecuencia}&kbps={$kbps}");

        curl_setopt_array($curl, [
            CURLOPT_URL => $converterUrl . "?frecuencia={$frecuencia}&kbps={$kbps}",
            CURLOPT_RETURNTRANSFER => true,
            // CURLOPT_VERBOSE => true,
            CURLOPT_TIMEOUT => 180, // 3 minutos
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $postData
        ]);

        $start_time = time();

        $response = curl_exec($curl);
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        curl_close($curl);

        $segundos = time() - $start_time;

        Log::channel('jobs')->info("Llamada finalizada en $segundos segundos");

        // Verificar el código de respuesta HTTP
        if ($httpCode === 200) {

            // Verificar si la carpeta existe en el destino
            StorageItem::ensureDirExists(dirname($this->destination));

            // Guardar la respuesta en el destino
            file_put_contents($destinationPath, $response);
            Log::channel('jobs')->info("La conversión del archivo se realizó exitosamente.");
        } else {
            // Mostrar información sobre el error
            $error = curl_error($curl);
            $info = curl_getinfo($curl);
            Log::channel('jobs')->error("Error al convertir el archivo: $error httpCode: {$info['http_code']} " . $response);
            throw new \Exception($error . " httpCode: $httpCode " . $response);
        }
    }
}
