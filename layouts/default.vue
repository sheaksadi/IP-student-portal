<script setup lang="ts">
const drawer = ref(false)
const drawerOpenClick = ref(true)
let pucLogo = 'https://puc.ac.bd/Content/new-template-assets/images/puc_logo.png'
import {useStore} from "~/stores/store";
let store = useStore()
const sidebarMouseEnter = () => {
  drawer.value = true
}
const sidebarMouseLeave = () => {
  drawer.value = false
}
let selectedRoute = ref('/')

let routes = [
  {
    name: 'Home',
    path: '/',
    icon: 'mdi:home-outline',
      subRoutes: [
        {
          name: 'Courses',
          path: '/courses',

        },
        {
          name: 'Teachers',
          path: '/teachers',

        },
        {
          name: 'Events',
          path: '/events',

        },

      ]
  },
  {
    name: 'Enrollment',
    path: '/enrollment',
    icon: 'iconamoon:enter',
      subRoutes: [
          {
              name: 'Courses',
              path: '/courses',

          },
          {
              name: 'Teachers',
              path: '/teachers',

          },
          {
              name: 'Events',
              path: '/events',

          },

      ]
  },
  {
    name: 'Results',
    path: '/results',
    icon: 'carbon:result',
      subRoutes: [
          {
              name: 'Courses',
              path: '/courses',

          },
          {
              name: 'Teachers',
              path: '/teachers',

          },
          {
              name: 'Events',
              path: '/events',

          },

      ]
  },
  {
    name: 'Routines',
    path: '/routines',
    icon: 'ep:calendar',
      subRoutes: [
          {
              name: 'Courses',
              path: '/courses',

          },
          {
              name: 'Teachers',
              path: '/teachers',

          },
          {
              name: 'Events',
              path: '/events',

          },

      ]
  },
  {
    name: 'Accounts',
    path: '/accounts',
    icon: 'arcticons:bank-1',
      subRoutes: [
          {
              name: 'Courses',
              path: '/courses',

          },
          {
              name: 'Teachers',
              path: '/teachers',

          },
          {
              name: 'Events',
              path: '/events',

          },

      ]
  },
  {
    name: 'Academics',
    path: '/academics',
    icon: 'mdi:academic-cap-outline',
      subRoutes: [
          {
              name: 'Courses',
              path: '/courses',

          },
          {
              name: 'Teachers',
              path: '/teachers',

          },
          {
              name: 'Events',
              path: '/events',

          },

      ]
  },

]
const winMount = ref(null);
onMounted(async () => {
    store.Window = window;
    store.screen = screen.value;
    store.winMount = winMount.value;

    setInterval(() => {
        for (let element of window.document.getElementsByClassName("header")) {
            if (!store.moveAbleElements.includes(element)) {
                store.mouseMoveHandler(element);
                store.moveAbleElements.push(element);
            }
        }
    }, 500);
});
const openTodo = () => {
    if (store.appUuid) {
      store.closeApp()
    }else {
        store.openApp()
    }

}
</script>

<template>
  <div class="h-screen w-full overflow-hidden" >
    <!--navbar-->
    <div class="flex w-full items-center justify-between bg-white h-[6%]" >
      <div class="flex">
        <div class="ml-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded hover:bg-gray-100">
          <Icon class="" size="2rem" name="mdi:menu" @click="drawerOpenClick = !drawerOpenClick"/>

        </div>
        <div class="ml-2 flex cursor-pointer select-none items-center" @click="navigateTo('/')">
          <img src="https://puc.ac.bd/Content/new-template-assets/images/puc_logo.png" alt="Puc-LOGO" class="w-[3rem]">
          <h1 class="ml-2 text-xl font-semibold text-gray-800">Premier University</h1>
        </div>
      </div>
      <div class="mr-2 flex">

          <div class="mr-2 flex h-12 w-fit cursor-pointer items-center justify-center p-2 hover:bg-gray-100 rounded select-none"
               @click="openTodo"
          >
              <h1 class=" text-xl"><Icon name="mdi:pencil" size="1.5rem" /> Todo</h1>

<!--              <div class="h-[50rem] w-[30rem] absolute top-20 right-6 bg-gray-500"></div>-->
          </div>

          <div class="relative flex h-12 cursor-pointer items-center border-0 border-l-2 border-gray-200 px-2 group">
              <div class="flex items-center">
                  <img src="https://i.imgur.com/oYbdbO4.png" alt="Profile Picture" class="mx-2 h-12 w-12 rounded-full">
              </div>
              <div class="absolute top-10 right-0 hidden group-hover:block">
                  <div class="mt-6 flex w-full flex-col items-center justify-center gap-2 rounded-md bg-white p-2 shadow-lg">
                      <div class="flex flex-col items-center justify-center rounded bg-gray-100 p-2">
                          <img src="https://i.imgur.com/oYbdbO4.png" alt="Profile Picture" class="mr-2 h-12 w-12 rounded-full">
                          <h1 class="text-xl font-semibold">Sheak Sadi</h1>
                          <h1 class="text-sm font-semibold">0222310005101026</h1>
                          <h1 class="text-sm font-semibold">Advisor: MD Hasan</h1>
                      </div>
                      <div class="w-full">
                          <a href="#" class="block rounded px-2 py-2 text-center text-gray-800 hover:bg-gray-200">Profile</a>
                          <a href="#" class="block rounded px-2 py-2 text-center text-gray-800 hover:bg-gray-200">Advisor</a>
                          <a href="#" class="block rounded px-2 py-2 text-center text-gray-800 hover:bg-gray-200">Settings</a>
                      </div>

                  </div>
              </div>
          </div>
      </div>


    </div>
    <div class="flex w-full h-[94%]">
      <!--sidebar-->
      <div class="h-full bg-gray-100 p-2 transition-all duration-300 border-r-2 border-gray-200 "
           :class="{'w-64': drawer || !drawerOpenClick, 'w-[4rem]': !(drawer || !drawerOpenClick) }"
           @mouseenter="sidebarMouseEnter"
           @mouseleave="sidebarMouseLeave"
      >
        <div
            v-for="route in routes"
            key="route.name"
            class="flex items-center w-full h-12 bg-gray-100
                     hover:bg-gray-200 p-1 overflow-hidden text-xl text-gray-600 mb-2 rounded cursor-pointer"
            :class="{'bg-gray-300': selectedRoute === route.path}"
            @click="navigateTo(route.path)"
        >
          <div>
            <Icon size="2.5rem" class="block" :name="route.icon"/>
          </div>

          <h1 class="ml-12 text-lg">{{ route.name }}</h1>
        </div>

      </div>

      <!--main-->
      <div class="h-full w-full" ref="winMount">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.group:hover .group-hover\:block,
.group-hover\:block:hover {
    display: block;
}
</style>
