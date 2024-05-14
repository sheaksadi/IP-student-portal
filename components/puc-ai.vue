<script setup lang="ts">
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between">
      <div class="flex w-full justify-between bg-slate-600 text-white">
          <h1 class="ml-2 text-2xl font-semibold" >PUC AI</h1>
          <div class="flex h-8 w-8 items-center justify-center bg-rose-400 hover:bg-red-500" @click="$emit('aiclose')">
              <Icon size="1.4rem" name="mingcute:close-fill" />
          </div>

      </div>
      <div></div>
      <div class="h-12 w-full bg-slate-700">
<!--          <h1 class="ml-2 text-2xl font-semibold text-gray-500">Chat</h1>-->
          <SInput label="Chat"></SInput>
      </div>
  </div>
</template>

<style scoped>

</style>
