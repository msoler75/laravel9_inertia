<template>
   <div class="bg-base-300">
    <p>hola perico</p>
        <input name="texto" type="text">
       <!-- <Editor v-model="content" @ready="ready" @load="ready" @blur="blur-xs" @focus="focus" @change="change"  format="md" full-editor/> -->
       <ImageCoverField from="texto"/>
       <Modal :show="true" maxWidth="4xl">
            <div class="flex flex-col">
       <FileManager ruta="" class="max-h-[90vh] grow"
                    content-class="max-h-[calc(100vh-240px)] overflow-y-auto" />
                    </div>
                    </Modal>
       {{ content }}
       <p>como va todo?</p>
    </div>
</template>


<script setup>

const content = ref("# hola mundo!\nfrase 1")

function ready() {
    console.log('READY')
}

    function blur() {
    console.log('BLUR')
}

function focus() {
    console.log('FOCUS')
}

function change() {
    console.log('CHANGE')
}



onMounted(()=>{
    console.log('content', content.value)
})
</script>
