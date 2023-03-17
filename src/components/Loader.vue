<template>
  <div class="absolute top-0 left-0 z-20 w-[100vw] h-[100vh] bg-black bg-opacity-80 grid place-content-center text-theme">
<v-icon scale="3" name="fa-spinner" animation="spin-pulse" />
  </div>
</template>

<script>
import OhVueIcon from "oh-vue-icons";
export default {
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>