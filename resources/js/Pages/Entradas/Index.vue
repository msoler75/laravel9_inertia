<template>
    <Page>

        <div class="flex justify-between mb-20">
            <span />
            <div class="flex gap-2">
                <Share />
                <AdminLinks modelo="entrada" necesita="administrar contenidos" />
            </div>
        </div>

        <h1>Blog</h1>
        <p>Aquí puedes conocer sobre la vida de la comunidad Tseyor.</p>

        <div class="flex justify-end mb-5">
            <SearchInput />
        </div>

        <ContentMain class="w-full flex gap-5 flex-wrap md:flex-nowrap">

            <div class="w-full grow">

                <SearchResultsHeader :results="listado" />

                <div class="grid gap-8" :style="{ 'grid-template-columns': `repeat(auto-fill, minmax(24rem, 1fr))` }">
                    <CardContent v-if="listado.data.length > 0" v-for="contenido in listado.data" :imageLeft="true"
                        :imageHeight="300" :key="contenido.id" :title="contenido.titulo" :image="contenido.imagen"
                        :href="route('entrada', contenido.slug)" :description="contenido.descripcion"
                        :date="contenido.published_at" imageClass="h-80" :skeleton="cargando" />
                </div>

                <pagination @click="cargando = true" @finish="cargando = false" scroll-to="#main-content" class="mt-6"
                    :links="listado.links" />

            </div>

            <div class="min-w-[250px] lg:min-w-[440px]" v-if="listado.first_page_url.indexOf('?buscar=') < 0">
                <div class="card bg-base-100 shadow-2xs p-10 space-y-7">
                    <h2 class="mb-5">Recientes</h2>
                    <ul class="list-disc">
                        <li v-for="entrada in recientes" :key="entrada.id">
                            <Link :href="`/entradas/${entrada.slug}`" class="mt-2 text-sm font-semibold">
                            {{ entrada.titulo }}
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </ContentMain>
    </Page>
</template>

<script setup>

const props = defineProps({
    listado: {
        default: () => { data: [] }
    },
    recientes: {
        default: () => []
    }
});

const cargando = ref(false);

</script>
