<template>
    <Page>

        <div class="flex justify-between mb-20">
            <span />
            <div class="flex gap-2">
                <Share />
                <AdminLinks modelo="user" necesita="administrar usuarios"  />
            </div>
        </div>

        <h1>Usuarios</h1>

        <div class="flex justify-end mb-5">
            <SearchInput />
        </div>

        <div class="w-full grow">

            <SearchResultsHeader :results="listado" />

            <div v-if="listado.data.length > 0" class="grid gap-4"
                :style="{ 'grid-template-columns': `repeat(auto-fill, minmax(10rem, 1fr))` }">
                <div v-if="listado.data.length > 0" v-for="usuario in listado.data" :key="usuario.id"
                    class="card bg-base-100 shadow-2xs p-3 space-y-2">
                    <Avatar :user="usuario" />
                    <Link :href="route('usuario', { id: usuario.slug || usuario.id })" class="text-center">
                    {{ usuario.name }}
                    </Link>
                </div>
            </div>


            <pagination class="mt-6" :links="listado.links" />

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
const categorias = ref(props.categorias)


</script>
