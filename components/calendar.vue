<template>
  <div class="max-w-sm mx-auto ">
    <div class="flex items-center justify-between mb-1">
      <button @click="prevMonth" class="py-1 px-2 bg-blue-500 text-xs text-white rounded"><</button>
      <div class=" font-bold">{{ months[currentMonth] }} {{ currentYear }}</div>
      <button @click="nextMonth" class="py-1 px-2 bg-blue-500 text-xs text-white rounded">></button>
    </div>
    <div class="grid grid-cols-7 gap-2">
      <div class="text-center text-sm">Sun</div>
      <div class="text-center text-sm ">Mon</div>
      <div class="text-center text-sm">Tue</div>
      <div class="text-center text-sm">Wed</div>
      <div class="text-center text-sm">Thu</div>
      <div class="text-center text-sm">Fri</div>
      <div class="text-center text-sm">Sat</div>

      <div v-for="blank in firstDay" :key="blank" class="py-1"></div>
      <div v-for="date in daysInMonth" :key="date" class="text-xs cursor-pointer" @click="toggleDate(date)" :class="{
        'bg-blue-200': isMarked(date),
        'bg-white': !isMarked(date)
      }">
        <div class="text-center">{{ date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'CalendarWidget',
  setup() {
    const currentMonth = ref(new Date().getMonth());
    const currentYear = ref(new Date().getFullYear());
    const markedDates = ref([]);

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const daysInMonth = computed(() => new Date(currentYear.value, currentMonth.value + 1, 0).getDate());

    const firstDay = computed(() => new Date(currentYear.value, currentMonth.value, 1).getDay());

    const toggleDate = (date) => {
      const fullDate = `${currentYear.value}-${currentMonth.value + 1}-${date}`;
      if (markedDates.value.includes(fullDate)) {
        markedDates.value = markedDates.value.filter(d => d !== fullDate);
      } else {
        markedDates.value.push(fullDate);
      }
    };

    const isMarked = (date) => {
      const fullDate = `${currentYear.value}-${currentMonth.value + 1}-${date}`;
      return markedDates.value.includes(fullDate);
    };

    const prevMonth = () => {
      if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value--;
      } else {
        currentMonth.value--;
      }
    };

    const nextMonth = () => {
      if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value++;
      } else {
        currentMonth.value++;
      }
    };

    return {
      currentMonth,
      currentYear,
      months,
      daysInMonth,
      firstDay,
      toggleDate,
      isMarked,
      prevMonth,
      nextMonth,
    };
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
