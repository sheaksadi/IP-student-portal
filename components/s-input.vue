<script setup lang="ts">
import {ref} from "vue";

defineProps({
  label: {
    type: String,
    default: 'Label'
  },
    isPassword: {
        type: Boolean,
        default: false
    }
})
const isFocused = ref(false)
const showPass = ref(true)
const value = defineModel()

const handleBlur = () => {
    if (!value.value) {
        isFocused.value = false
    }
}


</script>

<template>
  <div class="relative w-full">
    <input

        :type="isPassword && showPass ? 'password' : 'text'"
        class="w-full h-12 rounded outline outline-1 outline-gray-300 p-2 focus:outline-black focus:border-none focus:ring-0
                                        focus:placeholder-transparent
                                  "
        v-model="value"
        @focus="isFocused = true"
        @blur="handleBlur"

        @focusout="$emit('focusout')"

        >
      <div class="pointer-events-none absolute left-3 text-gray-500 transition-all ease-in-out duration-[130ms]"
           :class="{
        'top-[50%] transform translate-y-[-50%]': !isFocused && !value,
        'text-xs -top-2 left-2 bg-white px-1 text-black ': isFocused || value
      }"
      >{{label}}</div>
      <div class="absolute right-3 transform text-gray-500 top-[50%] translate-y-[-50%]"
      v-if="isPassword && value"
           @click="showPass = !showPass"
      >
          <Icon v-if="!showPass" size="1.5rem" name="mdi:eye"  />
          <Icon v-else size="1.5rem" name="mdi:eye-off"  />
      </div>
  </div>
</template>

<style scoped>

</style>


