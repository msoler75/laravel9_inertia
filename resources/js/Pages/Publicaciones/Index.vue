<template>
    <Page>

        <div class="flex justify-between items-center mb-20">
            <Back>Comunidad</Back>
            <div class="flex gap-2">
                <Share />
                <AdminLinks modelo="publicacion" necesita="administrar contenidos" />
            </div>
        </div>

        <h1>Publicaciones</h1>
        <p>Publicaciones de la comunidad Tseyor.</p>

        <div class="flex justify-end mb-5">
            <SearchInput />
        </div>


        <div class="w-full flex gap-7 lg:gap-10 flex-wrap md:flex-nowrap">

             <div
                class="gap-3 xl:gap-0 w-full md:w-[21ch] card bg-base-100 shadow-2xs flex-wrap flex-row xl:flex-col p-5 lg:p-10 xl:p-5 self-baseline md:sticky md:top-20">
                <Link :href="`${route('publicaciones')}`" class="py-2 hover:text-primary transition-colors duration-250"
                    :class="!filtrado && !categoriaActiva ? 'text-primary font-bold' : ''">
                <span class="capitalize">Novedades</span>
                </Link>

                <div v-for="categoria of categorias" :key="categoria.nombre" class="flex"
                    :class="categoriaActiva == categoria.nombre ? 'text-primary font-bold' : ''">
                    <Link :href="`${route('publicaciones')}?categoria=${categoria.nombre}`"
                        class="py-2 hover:text-primary transition-colors duration-250">
                    <span class="capitalize">{{ categoria.nombre }}</span>
                    <small v-if="categoria.total > 0"> ({{ categoria.total }})</small>
                    </Link>
                </div>
            </div>

            <div class="w-full grow card shadow-2xs bg-base-100 px-5 py-7">

                <SearchResultsHeader :results="listado" :category="categoriaActiva" />

                <div class="grid gap-2 py-4" :style="{ 'grid-template-columns': `repeat(auto-fill, minmax(24rem, 1fr))` }">

                    <Link  v-for="contenido in listado.data" :key="contenido.id" :href="route('publicacion', contenido.slug)"
                        class="hover:text-primary transition-color duration-200 px-5 py-2 h-full flex flex-row items-baseline gap-3 hover:bg-base-200/40 rounded-xl w-full">
                        <Icon icon="ph:dot-fill" class="shrink-0"/>
                        <div class="max-w-[calc(100%-7rem)]">
                            <div v-html="contenido.titulo" class="capitalize lowercase font-bold"/>
                        <div v-if="filtrado" v-html="contenido.descripcion" class="mt-3"/>
                        <span v-if="!categoriaActiva" class="badge mt-4 text-xs">{{ contenido.categoria }}</span>
                    </div>
                </Link>
                </div>


                <pagination class="mt-6" :links="listado.links" />


            </div>
        </div>
    </Page>
</template>


<script setup>


const props = defineProps({
    categoriaActiva: { default: () => '' },
    filtrado: { default: () => '' },
    listado: {
        default: () => { data: [] }
    },
    categorias: {
        default: () => []
    }
});

const listado = ref(props.listado);
// const categorias = ref(props.categorias)

</script>
