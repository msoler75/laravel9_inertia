<template>
    <div
        class="tabs tabs-box mb-12 gap-7 bg-base-300 w-fit max-w-full uppercase font-bold"
    >
        <component
            v-for="(tab, index) of tabsGlosario"
            :key="index"
            :href="tab.url"
            :is="tab.as"
            class="tab"
            :class="tab.class"
            :title="tab.title"
            @click="selected = tab.url"
            preserve-page
            :auto-scroll="false"
        >
        <!-- por motivos de SSR, mejor poner el label en v-html en un elemento hijo -->
            <span v-if="tab.label" v-html="tab.label"></span>
        </component>
    </div>
</template>

<script setup>
import Link from "@/Components/Link.vue";

const tabs = [
    {
        label: "Términos",
        route: "terminos",
        title: "Conoce los conceptos básicos o palabras clave de la filosofía Tseyor",
    },
    {
        label: 'Guías&nbsp;<span class="hidden sm:inline">Estelares</span>',
        route: "guias",
        title: "Tutores de la Confederación y otros hermanos de las estrellas.",
    },
    {
        label: 'Lugares&nbsp;<span class="hidden sm:inline">de la galaxia</span>',
        route: "lugares",
        title: "Lugares de interés",
    },
];

const tabsGlosario = computed(() =>
    tabs.map(tab => {
        const url = route(tab.route)
        const h = IAmHere(url);
        return {
            ...tab,
            url: route(tab.route),
            as: h ? "span" : Link,
            class: h ? "tab-active !bg-info !text-info-content cursor-default " : "",
        };
    })
);

const selected = ref(null);
const page = usePage();

function IAmHere(url) {
    console.log("page.url", page.url, "starts with", url, url.replace(/https?:\/\/[^\/]+/, ''), "?");
    return selected.value
        ? url == selected.value
        : page.url.startsWith(url.replace(/https?:\/\/[^\/]+/, ""));
}
</script>
