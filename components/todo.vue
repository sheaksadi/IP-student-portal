<template>
    <div class="  p-6  h-full">
        <h2 class="text-2xl font-bold text-center mb-6">Todo List</h2>
        <form
                @submit.prevent="addTodo"
                class="mb-6 flex space-x-2 items-center"
        >
            <SInput
                    v-model="newTodo"
                    label="Add a new todo"
                    class="flex-grow p-2 rounded-md"
            />
            <button
                    type="submit"
                    class="p-2 bg-blue-500 h-12 w-20 text-white rounded-md hover:bg-blue-600 flex items-center justify-center"
            >
                <h1 class="text-3xl">+</h1>
            </button>
        </form>
        <div class="mb-4">
            <SInput
                    v-model="searchTerm"
                    label="Search todos"
                    class="w-full p-2 rounded-md"
            />
        </div>
        <ul class="space-y-4 overflow-y-auto h-[70%]" style="scrollbar-width: thin;">
            <li
                    v-for="(todo, index) in filteredTodos"
                    :key="index"
                    class="flex justify-between items-center p-3 bg-gray-100 rounded-md"
            >
        <span :class="{ 'line-through text-gray-500': todo.completed }">
          {{ todo.text }}
        </span>
                <div class="flex space-x-2">
                    <button
                            @click="toggleTodo(index)"
                            class="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                        {{todo.completed ? 'Undo' : 'Done'}}
                    </button>
                    <button
                            @click="removeTodo(index)"
                            class="px-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        <h1 class="text-2xl">x</h1>
                    </button>
                </div>
            </li>
        </ul>

    </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import {persistStore} from "~/stores/persistStore";
let store = persistStore()


const newTodo = ref('');
const searchTerm = ref('');

const filteredTodos = computed(() => {
    return store.todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
});

function addTodo() {
    if (newTodo.value.trim()) {
        store.todos.push({
            text: newTodo.value.trim(),
            completed: false,
        });
        newTodo.value = '';
    }
}

function toggleTodo(index) {
    store.todos[index].completed = !store.todos[index].completed;
}

function removeTodo(index) {
    store.todos.splice(index, 1);
}
</script>

<style scoped>
/* Scoped styles are not needed as we are using Tailwind CSS */
</style>
