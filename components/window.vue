<script setup>
import WinBtn from "./winBtn";
import {useStore} from "~/stores/store.js";

const store = useStore();

const props = defineProps({
    title: String,
    icon: String,
    uuid: String,
    winCls: {
        type: String,
        default: "",
    },
    headerColor: {
        type: String,
        default: "bg-slate-700",
    },
    headerSelectColor: {
        type: String,
        default: "bg-slate-800",
    },
});

onMounted(() => {
    const {innerHeight, innerWidth} = store.Window;
    const {height, width} = appWindow.value.getBoundingClientRect();
    if (store.appCords.top === -1) {
      store.appCords = {
        top: "10px",
      }
        appWindow.value.style.right = "10px"
    }
    appWindow.value.style.top = store.appCords.top;
    appWindow.value.style.left = store.appCords.left;
    store.appWindow = appWindow.value;

});

const appWindow = ref(null);

const winStyle = computed(() => {
    const app = store.openedApps[props.uuid];
    if (!app) return "";

    const {status, isFullscreen} = app;
    const isSelected = store.selectedWindow === props.uuid;
    const isDragging = store.mouseDragging && !isFullscreen;

    const cls = [
        status === "minimized" && "scale-0 absolute w-[60rem] h-[34rem]",
        isSelected && "z-30",
        !isSelected && "z-20",
        isDragging && "noSelect",
        "absolute w-[30rem] h-[50rem] rounded",
    ]
        .filter(Boolean)
        .join(" ");

    if (appWindow.value) {
        const parentClassList = appWindow.value.parentNode.classList;
        if (false) {
            parentClassList.add("h-full", "w-full", "absolute", "top-0", "left-0");
            if (appWindow.value.style.top !== "0px" && appWindow.value.style.left !== "0px") {
                app.top = appWindow.value.style.top;
                app.left = appWindow.value.style.left;
            }
            appWindow.value.style.top = "0px";
            appWindow.value.style.left = "0px";
        } else {
            parentClassList.remove("h-full", "w-full", "absolute", "top-0", "left-0");
        }
    }

    return cls;
});

const winHeaderStyle = computed(() => {
    return store.selectedWindow === props.uuid ? props.headerSelectColor : props.headerColor;
});

function closeApp() {
    store.closeApp()
}

function atWindowClick() {
    store.selectedWindow = props.uuid;
}



// function atFullScreen() {
//     if (store.isDeviceMobile) {
//         return;
//     }
//     const app = store.openedApps[props.uuid];
//     if (!app.isFullscreen) {
//         app.minWidth = appWindow.value.getBoundingClientRect().width;
//     }
//     app.isFullscreen = !app.isFullscreen;
//
//     if (!app.isFullscreen) {
//         appWindow.value.style.top = app.top;
//         appWindow.value.style.left = app.left;
//         app.minWidth = appWindow.value.getBoundingClientRect().width;
//     }
// }
</script>

<template>
    <div
            :data-uuid="uuid"
            class="ring-1 ring-slate-500 flex flex-col transition-all duration-[50ms] ease-linear"
            ref="appWindow"
            :class="winStyle"
            @mousedown="atWindowClick"
    >
        <suspense>
            <div
                    class="w-full h-8 header flex items-center justify-between"
                    @dblclick="atFullScreen"
                    :class="winHeaderStyle"
            >
                <div class="flex items-center p-2">
                    <Icon class="text-white w-6 h-6 mr-2" :name="icon"/>
                    <h1 class="noSelect text-white">{{ title }}</h1>
                </div>
                <div class="flex flex-row-reverse">
                    <WinBtn
                            icon-name="bi:x-lg"
                            icon-size="4"
                            btnCls="hover:bg-red-600 w-10 h-8"
                            @click="closeApp"
                    ></WinBtn>
<!--                    <WinBtn-->
<!--                            :icon-name="fullScreenIcon"-->
<!--                            :icon-size="fullScreenIconSize"-->
<!--                            btnCls="hover:bg-gray-600 w-10 h-8"-->
<!--                            icon-cls=""-->
<!--                            @click="atFullScreen"-->
<!--                    ></WinBtn>-->
<!--                    <WinBtn-->
<!--                            icon-name="ic:twotone-minus"-->
<!--                            icon-size="5"-->
<!--                            icon-cls="font-bold"-->
<!--                            btnCls="hover:bg-gray-600 w-10 h-8"-->
<!--                            @click="atMinimize"-->
<!--                    ></WinBtn>-->
                </div>
            </div>
        </suspense>
        <div class="w-full h-full relative overflow-hidden">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.noSelect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently
                                     supported by Chrome and Opera */
}
</style>
