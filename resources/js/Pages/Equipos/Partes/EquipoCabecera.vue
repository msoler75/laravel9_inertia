<template>
    <div class="py-5 bg-base-100 border-b border-gray-300 z-30" >
        <div class="container flex gap-5 items-center">
        <Image :src="equipo.imagen"
          fallback="/almacen/medios/equipos/equipo1.jpg"
        alt="Imagen del equipo" class="w-10 h-10 object-cover rounded-lg" />
            <h1 class="my-2 text-2xl">
                {{ equipo.nombre }}
            </h1>
            <div class="hidden sm:flex ml-auto gap-3 text-2xl items-center">
                <Icon icon="ph:user-duotone" />
                {{ equipo.miembros.length }}
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({ equipo: { type: Object, required: true } })

</script>
