<script setup>

import Window from "~/components/window.vue";
import {useStore} from "~/stores/store.js";
let store = useStore()


const getLick = computed(() => {

});
let player = ref(null)
onMounted(() => {

})



</script>
<template>
    <Window icon="mdi:pencil" title="Todos">
        <div class="h-full w-full bg-white" >
          <Todo></Todo>
        </div>
    </Window>
</template>


<style scoped>

</style>
