<template>
    <div class="w-full flex justify-center">
        <img
                class="h-full cursor-pointer"
                :src="imageLink"
                alt="calendar"
                @click="showModal = true"
        />
    </div>

  <!-- Modal -->
    <div
            v-if="showModal"
            class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
            @click.self="showModal = false"
    >
        <div class=" rounded-lg overflow-hidden">
            <img
                    class="w-full h-auto max-h-[80vh] object-contain"
                    :src="imageLink"
                    alt="calendar"
            />
            <div class="p-1 flex justify-end">
                <a
                        :href="imageLink"
                        target="_blank"
                        class="hover:underline text-blue-500"
                >
                    Open in Browser
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imageLink: {
        type: String,
        required: true,
    },
});

const showModal = ref(false);
</script>
