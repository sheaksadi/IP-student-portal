<template>
    <div
            class="border group h-[15rem] bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
            :class="styles"
            @click="showingCourseModal = !showingCourseModal"
    >
        <div>
            <div
                    class="h-[5rem] p-3 flex justify-between items-center"
                    :class="`bg-${color}-500 group-hover:bg-${color}-400`"
            >
                <div class="flex flex-col gap-1">
                    <h1 class="text-white text-md truncate-text">{{ title }}</h1>
                    <h1 class="font-semibold text-xs" :class="`text-${color}-900`">{{ code }}</h1>
                </div>

                <div class="flex space-x-1 text-${color}-900">
                    <Icon v-if="!store.likedCourses.includes(code)" @click.stop="heartClicked" size="1.4rem" name="mdi:heart-outline" />
                    <Icon v-else @click.stop="heartClicked" size="1.4rem" name="mdi:heart" />
                    <div class="relative group/tr">
                        <Icon size="1.4rem" name="bi:three-dots-vertical" />
                        <div class="absolute right-0 bg-white rounded-md shadow-lg z-10 scale-0 group-hover/tr:scale-100 w-36 hover:scale-100">
                            <div class="py-1">
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100" @click.prevent="showAlert">Option 1</a>
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100" @click.prevent="showAlert">Option 2</a>
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100" @click.prevent="showAlert">Option 3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-2">
                <h1 class="text-sm text-gray-500">Credit: {{ credit }}</h1>
                <h1 class="text-sm text-gray-500">Class Times</h1>
                <h1 v-for="classTime in classes" class="text-sm">{{ classTime }}</h1>
            </div>
        </div>

        <div class="p-2">
            <div class="flex items-center justify-between">
                <div
                        class="flex items-center hover:outline-1 hover:outline-blue-500 cursor-pointer rounded hover:bg-gray-200 px-2"
                >
                    <span class="text-sm font-semibold text-gray-500">{{ teacher }}</span>
                </div>
                <div class="flex space-x-2">
                    <button class="focus:outline-none" @click.stop="makeCall">
                        <Icon size="1.4rem" name="material-symbols:call" />
                    </button>
                    <button class="focus:outline-none" @click.stop="openFolder">
                        <Icon size="1.4rem" name="ph:folder" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Course Modal -->
        <div v-if="showingCourseModal" class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                >
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div
                                    class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                            >
                                <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    {{ title }}
                                </h3>
                                <div class="mt-2">
                                    <p class="text-sm leading-5 text-gray-500">
                                        Course Code: {{ code }}<br />
                                        Teacher: {{ teacher }}<br />
                                        Credit: {{ credit }}<br />
                                        Class Times:<br />
                                        <span v-for="classTime in classes">{{ classTime }}<br /></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                      @click="showingCourseModal = !showingCourseModal"
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Close
              </button>
            </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { persistStore } from "~/stores/persistStore";
let store = persistStore();
let props = defineProps({
    title: {
        type: String,
        default: "Course Title",
    },
    code: {
        type: String,
        default: "CSE-101",
    },
    color: {
        type: String,
        default: "red",
    },
    teacher: {
        type: String,
        default: "Teacher Name",
    },
    styles: {
        type: String,
        default: "",
    },
    credit: {
        type: Number,
        default: 0,
    },
    classes: {
        people: Array as PropType<Array<String>>,
        default: () => [],
    },
});

const showingCourseModal = ref(false);

const showCourseModal = () => {
    showingCourseModal.value = true;
};

const closeCourseModal = () => {
    showingCourseModal.value = false;
};

let heartClicked = () => {
    if (store.likedCourses.includes(props.code)) {
        store.likedCourses.splice(store.likedCourses.indexOf(props.code), 1);
    } else {
        store.likedCourses.push(props.code);
    }
};

let showDropdown = ref(false);
const makeCall = () => {
    // Add your call functionality here
    alert("Copied to clipboard!");
};

const openFolder = () => {
    // Add your folder opening functionality here
    alert("Folder opening functionality triggered!");
};
const showAlert = () => {
    alert("Option clicked!");
};
</script>

<style scoped>
.truncate-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
