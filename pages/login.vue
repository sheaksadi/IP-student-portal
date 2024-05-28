<script setup lang="ts">
import SInput from "~/components/s-input.vue";
import { required, minLength, helpers } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

definePageMeta({
    layout: 'login'
});

let showModal = ref(false);
let showPass = ref(true);
let password = ref('');
let ID = ref('');

const idRules = {
    required,
    isNumber: helpers.regex(/^\d+$/),
    isSpecificID: helpers.withParams({ id: 1000 }, (id) => {
        return ID.value == id;
    }),
};

const passwordRules = {
    required,
    minLength: minLength(8),
    isSpecificPassword: helpers.withParams({ pass: 'password' }, (pass) => {
        return password.value == pass;
    }),
};

const submitForm = async () => {
    const isIDValid = await v$.value.ID.$validate();
    const isPasswordValid = await v$.value.password.$validate();

    if (!isIDValid || !isPasswordValid) return;

    // Your form submission logic here
    console.log('Form submitted successfully!');
    navigateTo("/");
};
const support = () => {
    window.open('mailto:controller@puc.ac.bd', '_blank')
}
const v$ = useVuelidate({ ID: idRules, password: passwordRules }, { ID, password, $reactivate: true });
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
                        <div class="w-full">
                            <s-input @focusout="v$.ID.$validate()" label="Student ID" v-model="ID" :error="v$.ID.$error" />
                            <span v-if="v$.ID.$error" class="text-red-500 text-xs">
                                <span v-if="!v$.ID.isNumber.$response">ID must be a number</span>
                                <span v-else-if="!v$.ID.isSpecificID.$response">Invalid ID</span>
                                <span v-else>{{ v$.ID.$errors[0].$message }}</span>
                            </span>
                        </div>
                        <div class="w-full">
                            <s-input @focusout="v$.password.$validate()" label="Password" :isPassword="true" v-model="password" :error="v$.password.$error" />
                            <span v-if="v$.password.$error" class="text-red-500 text-xs">
                                <span v-if="!v$.password.minLength.$response">Password must be at least 8 characters long</span>
                                <span v-else-if="!v$.password.isSpecificPassword.$response">Invalid Password</span>
                                <span v-else>{{ v$.password.$errors[0].$message }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="mt-16 flex flex-col md:absolute md:right-0 md:bottom-0 md:flex-row md:items-end">
                    <span class="mb-2 cursor-pointer text-sm text-gray-500 underline md:mr-2 md:mb-0" @click="showModal = true">Forgot Password</span>
                    <button class="rounded bg-blue-500 px-4 py-2 text-white font-weight-bold hover:bg-blue-600" @click.prevent="submitForm">Login</button>
                </div>
            </div>
        </div>
    </div>

  <!-- Modal -->

      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div class="relative">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Forgot Password
                      </h3>
                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="showModal = false">
                          <Icon name="mdi:close" class="w-5 h-5" />
                      </button>
                  </div>
                  <div class="p-6 space-y-6">
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          If you have forgotten your password, please contact us through one of the following methods:
                      </p>
                      <button @click="support" class="flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 text-gray-500 font-medium rounded-lg px-4 py-2 w-full">
                          <Icon name="ic:outline-email" class="w-6 h-6" />
                          <span>support@puc.ac.bd</span>
                      </button>
                      <button @click="support" class="flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 text-gray-500 font-medium rounded-lg px-4 py-2 w-full">
                          <Icon name="ic:outline-call" class="w-6 h-6" />
                          <span> IT Office: +8801313044519 (Bkash) </span>
                      </button>
                      <button @click="support" class="flex items-center space-x-4 bg-gray-100 hover:bg-gray-200 text-gray-500 font-medium rounded-lg px-4 py-2 w-full">
                          <Icon name="ic:outline-chat" class="w-6 h-6" />
                          <span>Live Chat Support</span>
                      </button>
                  </div>
              </div>
          </div>
      </div>



</template>
<style>

</style>
