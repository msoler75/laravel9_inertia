<template>
    <div>
        <Card class="select-none">
            <h3>Administración</h3>
            <ul class="list-none p-0 space-y-2">
                <li class="flex gap-2 items-center cursor-pointer" @click="solicitudes.mostrar">
                    <Icon icon="ph:envelope-duotone" />Solicitudes de ingreso
                    <span v-if="numSolicitudesPendientes" class="text-primary text-sm">({{ numSolicitudesPendientes
                        }})</span>
                </li>
                <li class="flex gap-2 items-center cursor-pointer" @click="miembros.mostrar">
                    <Icon icon="ph:users-duotone" />Miembros del equipo
                </li>
                <li class="flex gap-2 items-center cursor-pointer" @click="invitaciones.mostrar">
                    <Icon icon="ph:user-plus-duotone" />Invitar a usuario/s
                </li>
                <li class="flex gap-2 items-center cursor-pointer" @click="modalEnlace = true">
                    <Icon icon="ph:share-fat-duotone" />Enlace del equipo
                </li>
                <li class="flex gap-2 items-center cursor-pointer" @click="config.mostrar">
                    <Icon icon="ph:gear-six-duotone" />Configuración
                </li>
            </ul>
        </Card>

        <ModalMiembros :equipo="props.equipo" ref="miembros" @updated="actualizarEquipo" />

        <ModalConfiguracion :equipo="props.equipo" ref="config" @updated="actualizarEquipo" />

        <ModalInvitaciones :equipo="props.equipo" ref="invitaciones" />

        <ModalSolicitudes :equipo="props.equipo" ref="solicitudes" @updated="actualizarEquipo" />

        <Modal :show="modalEnlace" @close="modalEnlace = false" centered>
            <div class="p-5">
                <h3><span class="font-italic">{{ equipo.nombre }}</span></h3>
                <div class="my-7 flex items-center gap-4 select-none">
                    <div class="select-text">
                        {{ enlaceEquipo }}
                    </div>
                        <div class="btn btn-primary btn-sm" @click="copyToClipboard" title="Copiar al portapapeles">
                            <Icon icon="ph:clipboard-text-duotone" class="text-xl" />
                        </div>
                </div>

                <div class="py-3 flex justify-end">
                    <button @click.prevent="modalEnlace = false" type="button" class="btn btn-neutral">
                        cerrar
                    </button>
                </div>
            </div>
        </Modal>

    </div>
</template>


<script setup>
import ModalConfiguracion from './ModalConfiguracion.vue'
import ModalInvitaciones from './ModalInvitaciones.vue'
import ModalMiembros from './ModalMiembros.vue'
import ModalSolicitudes from './ModalSolicitudes.vue'

const props = defineProps({ equipo: { type: Object, required: true } })

const emit = defineEmits(['updated'])

const miembros = ref()
const config = ref()
const invitaciones = ref()
const solicitudes = ref()

const modalEnlace = ref(false)

const numSolicitudesPendientes = computed(() => {
    return props.equipo.solicitudesPendientes.filter(s => !s.fecha_aceptacion && !s.fecha_denegacion).length
})

const enlaceEquipo = computed(() => route('equipo', props.equipo.slug))

onMounted(() => {
    // para que se abra la sección de solicitudes con una URL  ?solicitudes
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('solicitudes')) {
        solicitudes.value.mostrar()
    }
})

function actualizarEquipo() {
    console.log('EquipoAdmin.actualizarEquipo')
    emit('updated')
}


function copyToClipboard() {
    navigator.clipboard.writeText(enlaceEquipo.value)
        .then(() => {
            alert('Enlace copiado al portapapeles');
            console.log('Texto copiado al portapapeles');
        })
        .catch((error) => {
            console.error('Error al copiar al portapapeles:', error);
        });
}
</script>
