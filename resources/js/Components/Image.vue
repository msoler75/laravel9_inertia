<template>
    <img :src="finalSrc" :alt="alt" />
</template>



<script setup>
import { imageUrl } from '@/utils.js'

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    fallback: {
        type: String,
        required: false
    },
    alt: {
        type: String,
    },
    title: {
        type: String
    }
});

const finalSrc = computed(() => imageUrl(props.src, props.fallback))

</script>