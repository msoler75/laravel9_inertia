<template>
    <span class="inline text-primary cursor-pointer xafter:content-['↗'] hover:underline hyphens-none"  ref="referencia"
    @click="buscar">
        <slot></slot>
    </span>
</template>


<script setup>


const props = defineProps({
    r: { type: String, required: false },
    colecciones: {default: null}
})

import useGlobalSearch from "@/Stores/globalSearch.js"

const search = useGlobalSearch()



const referencia = ref(null)

function buscar(){
    search.open()
    console.log(referencia.value)
    const nuevoQuery = props.r? props.r: referencia.value.innerText
    if(search.query!=nuevoQuery) {
        search.query=nuevoQuery
        search.lastQuery = null
        search.showSuggestions = false
        search.results = null
        search.restrictToCollections = props.colecciones
    }
}
</script>


