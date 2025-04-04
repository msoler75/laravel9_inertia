<template>
    <Page>

        <div class="flex justify-between items-center mb-20">
            <Back>Usuarios</Back>
            <span></span>
            <div class="flex gap-2">
                <Share />
                <AdminLinks modelo="user" necesita="administrar usuarios" :contenido="usuario" />
           </div>
        </div>

        <Sections>

            <Section class="mx-auto flex flex-col items-center py-20">
                <Avatar :link="false" :user="usuario" image-class="w-64 h-64" text-class="text-5xl"/>

                <div v-if="soyYo" class="flex justify-center my-2">
                    <Link class="btn btn-xs btn-primary" href="/user/profile">cambiar imagen</Link>
                </div>

                <h1 class="text-center my-2">
                    {{ usuario.name || usuario.slug }}
                </h1>

                <div v-if="!soyYo && user && user.id===1">
                    <form @submit.prevent="cambiarUsuario">
                        <button type="submit" class="btn btn-xs btn-primary">Cambiar a este usuario</button>
                    </form>
                </div>

                <div class="my-2 flex flex-wrap gap-3">
                    <div class="badge" v-for="grupo of gruposNoEquipos" :key="grupo.id">{{ grupo.nombre }}</div>
                </div>

                <div class="prose my-7">
                    <form @submit.prevent="onSubmit">
                        <textarea class="w-full max-w-full" cols=160 v-if="editandoFrase" v-model="nuevaFrase"></textarea>
                        <blockquote v-else-if="usuario.frase">
                            <p>{{ usuario.frase }}</p>
                        </blockquote>
                        <div v-if="soyYo"  class="w-full flex justify-center gap-4">
                            <button v-if="!editandoFrase" class="btn btn-primary btn-xs" @click="editarFrase">Editar frase</button>
                            <button v-if="!editandoFrase" class="btn btn-primary btn-xs" @click="generarFrase">Generar frase</button>
                            <button type="submit" v-if="editandoFrase" class="btn btn-primary btn-xs" @click="guardarFrase">Guardar</button>
                            <button v-if="editandoFrase" class="btn btn-error btn-xs" @click="cancelarFrase">Cancelar</button>
                        </div>
                    </form>
                </div>




                <div class="flex flex-wrap justify-center gap-5">
                    <Link class="badge badge-neutral gap-2" v-for="equipo of usuario.equipos" :key="equipo.id"
                        :href="route('equipo', equipo.slug || equipo.id)">
                    <span v-if="administrar" @click.prevent="abrirModalEliminarEquipo(equipo)">x</span>
                    {{ equipo.nombre }}
                    </Link>
                </div>

                <div  v-if="administrar && equiposFiltrados.length" class="mt-7">
                    <form @submit.prevent="agregarEquipo" class="space-y-3">
                        <label>Agregarlo al equipo:</label>
                        <select v-model="equipoSeleccionado" placeholder="Elige un equipo..." class="text-gray-900">
                            <option v-for="equipo of equiposFiltrados" :key="equipo.id" :value="equipo.id">{{ equipo.nombre
                            }}</option>
                        </select>
                        <input type="submit" class="btn btn-primary" value="Agregar al Equipo" :disabled="!equipoSeleccionado">
                    </form>
                </div>

            </Section>

            <Section class="py-20">
                <div class="mx-auto xl:max-w-xl px-4">
                    <h2 class="text-center">Últimos comentarios</h2>
                    <ul class="list-none space-y-5">
                        <div v-if="!comentarios.length" class="my-16 text-center">No hay comentarios todavía</div>
                        <li v-else v-for="comentario of comentarios"
                            class="w-full flex flex-col gap-3 md:flex-row justify-between items-baseline">
                            <Link :href="comentario.url" class="prose">
                            <blockquote>
                                <p>
                                    {{ comentario.texto }}
                                </p>
                            </blockquote>
                            </Link>
                            <TimeAgo :date="comentario.created_at" class="text-sm" />
                        </li>
                    </ul>
                </div>
            </Section>


            <!-- Modal Confirmación de eliminar Archivo -->
            <ConfirmationModal :show="modalEliminarEquipo" @close="modalEliminarEquipo = false">
                <template #title>
                    Confirmación de eliminación
                </template>
                <template #content>
                    ¿Quieres removerlo del equipo '{{ equipoAEliminar.nombre }}'?
                </template>
                <template #footer>
                    <form class="w-full space-x-4" role="dialog" aria-modal="true" aria-labelledby="modal-headline"
                        @submit.prevent="eliminarEquipo">

                        <button @click.prevent="modalEliminarEquipo = false" type="button" class="btn btn-secondary">
                            Cancelar
                        </button>

                        <button type="submit" class="btn btn-primary">
                            Eliminar
                        </button>
                    </form>
                </template>
            </ConfirmationModal>
        </Sections>
    </Page>
</template>

<script setup>
import { router } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';

const page = usePage()
const user = page.props.auth.user

const props = defineProps({
    usuario: {
        type: Object,
        required: true,
    },
    comentarios: {
        type: Array,
        required: true
    },
    administrar: {
        type: Boolean,
        default: false
    },
    equipos: {
        type: Array,
        default: []
    }
})

// todos los equipos, excepto los que el usuario ya es miembro
const equiposFiltrados = computed(() => props.equipos.filter(e => !props.usuario.equipos.find(ue => ue.id == e.id)))

const gruposNoEquipos = computed(()=> props.usuario.grupos.filter(g=>!props.usuario.equipos.find(e=>e.group_id==g.id)))

const soyYo = computed(()=>user?.id==props.usuario.id)

const image = computed(() => props.usuario.avatar || props.usuario.profile_photo_url || props.usuario.imagen)
const urlImage = computed(() => {
    if (!image.value) return '/almacen/profile-photos/user.png'
    if (image.value.match(/^https?:\/\//)) return image.value
    return '/storage/' + image.value
})

const nuevaFrase = ref(props.usuario.frase)
const editandoFrase = ref(false)

const modalEliminarEquipo = ref(false)
const equipoAEliminar = ref(null)
const equipoSeleccionado = ref(null)
const error = ref(null)

function abrirModalEliminarEquipo(equipo) {
    equipoAEliminar.value = equipo
    modalEliminarEquipo.value = true
}

function eliminarEquipo() {
    console.log('eliminar Equipo', equipoAEliminar.value, 'user:', props.usuario.id)
    modalEliminarEquipo.value = false
    axios.put(route('equipo.remover', { idEquipo: equipoAEliminar.value.id, idUsuario: props.usuario.id }))
        .then(respuesta => {
            reload()
        })
        .catch(err => {
            console.log({ err })
            error.value = "No se ha podido remover el equipo."
        })
}

function reload() {
    // console.log('reload')
    router.reload({
        only: ['usuario']
    })
}

function agregarEquipo() {
    console.log('agregar Equipo', { idEquipo: equipoSeleccionado.value, idUsuario: props.usuario.id })
    axios.put(route('equipo.agregar', { idEquipo: equipoSeleccionado.value, idUsuario: props.usuario.id }))
        .then(respuesta => {
            reload()
        })
        .catch(err => {
            console.log({ err })
            error.value = "No se ha podido agregar el equipo."
        })
}



function editarFrase() {
    nuevaFrase.value = props.usuario.frase
    editandoFrase.value = true
}

function guardarFrase() {

    axios.put(route('usuario.guardar', props.usuario.id), { frase: nuevaFrase.value })
    .then(respuesta => {
        reload()
        editandoFrase.value = false
        })
        .catch(err => {
            console.log({ err })
            error.value = "No se ha podido editar la frase."
        })
}

function generarFrase() {
    nuevaFrase.value = ""
    guardarFrase()
}

function cancelarFrase() {
    editandoFrase.value = false
}

function onSubmit() {
    if(editandoFrase.value)
        guardarFrase()
}



function cambiarUsuario() {
    console.log('cambiarUsuario')
    axios.post(route('admin.loginAs', props.usuario.id))
    .then((response) => {
        location.reload()
    })
}

</script>
