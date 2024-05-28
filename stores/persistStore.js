
import { defineStore } from 'pinia'

export const persistStore = defineStore('persist', {
  state: () => {
    return {
      someState: 'hello pinia',
      likedCourses: [],
      todos: [
        {text: 'Learn Nuxt 3', completed: false},
        {text: 'Finish OOP Assingment', completed: true},
        {text: 'SLEEP!!!!', completed: false},
      ],
      appCords: {
        top: -1,
        right: -1,
        left: -1,
      }
    }
  },
  persist: true
})
