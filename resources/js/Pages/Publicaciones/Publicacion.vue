<template>
    <Page>

        <div class="flex justify-between items-center mb-20">
            <Back>Publicaciones</Back>
            <div class="flex gap-2">
                <Share />
                <AdminLinks modelo="publicacion" necesita="administrar contenidos" :contenido="publicacion" />
            </div>
        </div>


        <div class="py-[10ch] bg-base-100 max-w-[80ch] mx-auto shadow-xl mb-12 px-7 md:px-0 animate-fade-in">

            <div class="prose mx-auto">
                <h1>{{ publicacion.titulo }}</h1>

                <div class="text-sm mb-2 flex justify-between">
                    <div />
                    <TimeAgo :date="publicacion.updated_at" :includeTime="false" />
                </div>
            </div>

            <Content :content="publicacion.texto" class="mx-auto" />

        </div>

        <Comentarios :url="route('publicacion', publicacion.id)" />

    </Page>
</template>

<script setup>
// import usePlayer from '@/Stores/player'

// const player = usePlayer()


const props = defineProps({
    publicacion: {
        type: Object,
        required: true,
    }
});


</script>
