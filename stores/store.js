import {defineStore} from 'pinia'
import {createApp, defineAsyncComponent} from "vue"
import {useFetch} from "nuxt/app";

export const useStore = defineStore('main', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically

      moveAbleElements: [],

      openedApps: [],
      mouseDragging: false,
      selectedWindow: null,
      isDeviceMobile: false,
      Window: {
        innerHeight: 0,
        innerWidth: 0,
        height: 0,
        width: 0,
      },
      winMount: null,
      screen: {
        height: 0,
        width: 0,
      },
      appUuid: null,
      appWindow: null,
      mouseDown: false,
      appCords: {
        top: -1,
        right: -1,
        left: -1,
      }


    }
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    test() {
      console.log("test")
    },
    closeApp() {
      this.appWindow.parentNode.parentNode.removeChild(this.appWindow.parentNode);
      this.openedApps[this.appUuid].instance.unmount();
      this.appUuid = null
      delete this.openedApps[this.appUuid];
    },
    openApp(name) {
      let component = defineAsyncComponent(() => import(`../components/window-todo.vue`))
      let uuid = crypto.randomUUID()
      this.appUuid = uuid
      let vueApp = createApp(component, {uuid})

      if (this.winMount) {
        let element = this.Window.document.createElement("div")
        element.classList.add('absolute', 'top-0', 'left-0');


        vueApp.mount(element)
        this.winMount.appendChild(element)


        this.openedApps[uuid] = {
          instance: vueApp,
          status: "open",
          isFullScreen: false,
        };
        this.selectedWindow = uuid
      }
    },
    mouseMoveHandler(element) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      element.onmousedown = mouseDown
      let that = this

      function mouseDown(e) {
        element.parentNode.classList.remove('transition-all', 'duration-[50ms]', 'ease-linear');
        window.document.onmouseup = closeDragElement;
        if (Boolean(e.target.closest(".no-drag"))) return
        that.mouseDragging = true
        e.preventDefault()
        pos3 = e.clientX;
        pos4 = e.clientY;

        // call a function whenever the cursor moves:
        window.document.onmousemove = elementDrag;
        console.log("srgrg", e.target.getBoundingClientRect().left)

      }

      function elementDrag(e) {

        element.parentNode.classList.remove('transition-all', 'duration-[50ms]', 'ease-linear');
        e.preventDefault()


        // calculate the new cursor position:

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        that.appCords.top = (element.parentNode.offsetTop - pos2) + "px";
        that.appCords.left = (element.parentNode.offsetLeft - pos1) + "px";
        element.parentNode.style.top = (element.parentNode.offsetTop - pos2) + "px";
        element.parentNode.style.left = (element.parentNode.offsetLeft - pos1) + "px";

      }

      function closeDragElement() {
        that.mouseDragging = false


        window.document.onmouseup = null;
        window.document.onmousemove = null;
      }

    },

  },
},)
