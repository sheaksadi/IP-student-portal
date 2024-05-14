<script setup lang="ts">
let props = defineProps({
    title: {
        type: String,
        default: 'Course Title'
    },
    code: {
        type: String,
        default: 'CSE-101'
    },
    color: {
        type: String,
        default: 'red'
    },
    teacher: {
        type: String,
        default: 'Teacher Name'
    },
    styles: {
        type: String,
        default: ''
    },
    credit: {
        type: Number,
        default: 0
    },
    classes: {
        people: Array as PropType<Array<String>>,
        default: () => [],
    }
})

</script>

<template>
  <div
      class="border group h-[15rem] bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
      :class="styles"
  >
      <div>
          <div class=" h-[5rem] p-3 flex justify-between items-center "
               :class="`bg-${color}-500 group-hover:bg-${color}-400 `"
          >
              <div class="flex flex-col gap-1">
                  <h1 class="text-white text-md truncate-text">{{ title }}</h1>
                  <h1 class="font-semibold text-xs" :class="`text-${color}-900`">{{ code }}</h1>
              </div>

              <div class="flex space-x-1 text-${color}-900">
                  <Icon size="1.4rem" name="mdi:heart-outline" />
                  <Icon size="1.4rem" name="bi:three-dots-vertical" />
              </div>

          </div>
          <div class="p-2">
              <h1 class="text-sm text-gray-500">Credit: {{credit}}</h1>
              <h1 class="text-sm text-gray-500">Class Times</h1>
              <h1 v-for="classTime in classes" class="text-sm">{{classTime}}</h1>
          </div>

      </div>


    <div class="p-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center  hover:outline-1 hover:outline-blue-500 cursor-pointer rounded hover:bg-gray-200 px-2">
          <span class="text-sm font-semibold text-gray-500">{{teacher}}</span>
        </div>
        <div class="flex space-x-2">
          <Icon size="1.4rem" name="material-symbols:call" />
          <Icon size="1.4rem" name="ph:folder" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.truncate-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
