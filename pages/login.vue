<script setup lang="ts">
import SInput from "~/components/s-input.vue";

definePageMeta
({
    layout: 'login'
})


  let showPass = ref(false)
  let password = ref('')
  let ID = ref('')
</script>

<template>
    <div class="flex min-h-screen w-full items-center justify-center">
        <div class="w-9/12 rounded-2xl bg-white p-6 shadow-xl md:h-[28rem] md:w-10/12 md:p-10 lg:w-[64rem]">
            <img class="mb-6 w-[6rem]" src="https://puc.ac.bd/Content/new-template-assets/images/puc_logo.png" alt="Puc-LOGO">
            <div class="relative flex flex-col md:h-[14rem] md:flex-row">
                <div class="mb-4 w-full md:mb-0">
                    <h1 class="select-none text-3xl md:text-4xl">Premier University</h1>
                    <h1 class="mb-2 select-none text-3xl md:mb-4 md:text-4xl">Chattogram</h1>
                    <h1 class="select-none text-lg">STUDENT PORTAL</h1>
                </div>
                <div class="flex w-full flex-col justify-between">
                    <div class="flex flex-col items-center gap-4">
                        <s-input label="Student ID" v-model="ID"></s-input>
                        <s-input label="Password" :isPassword="true" v-model="password"></s-input>
                    </div>
                </div>
                <div class="mt-16 flex flex-col md:absolute md:right-0 md:bottom-0 md:flex-row md:items-end">
                    <span class="mb-2 cursor-pointer text-sm text-gray-500 underline md:mr-2 md:mb-0">Forgot Password</span>
                    <button class="rounded bg-blue-500 px-4 py-2 text-white font-weight-bold hover:bg-blue-600" @click="navigateTo('/')">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
