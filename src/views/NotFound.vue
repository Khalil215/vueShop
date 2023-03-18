<template>
  <div class="grid place-content-center w-[100vw] h-[100vh]">
    <h1 class="text-2xl font-bold">Oopss... Wrong Route</h1>
    <router-link :to="{name:'home'}"><div class="text-theme underline text-center">Return to Home page</div></router-link>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

onMounted(() => {
  store.commit("toggleShowNav", false);
});
onUnmounted(() => {
  store.commit("toggleShowNav", true);
});
</script>

<style lang="scss" scoped></style>
