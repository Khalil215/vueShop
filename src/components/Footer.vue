<template>
  <div className='grid gap-10 sm:flex justify-around  bg-back text-white text-lg py-10'>
    <div className="grid gap-4">
      <div className="font-bold text-xl">VueShop</div>
      <div className="flex gap-4 justify-center">
        <v-icon  name="bi-youtube"/>
        <v-icon  name="bi-twitter"/>
        <v-icon  name="bi-instagram"/>
      </div>
    </div>
    <div className="flex gap-4 sm:grid text-left justify-center ">
      <router-link :to="{name:'home'}">HOME</router-link>
      <router-link :to="{name:'products'}">PRODUCTS</router-link>
    </div>
    <div>
      <div>&#169; Khalil 2023 All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
import OhVueIcon from "oh-vue-icons";
export default {
  components: {
    "v-icon": OhVueIcon
  }
}
</script>

<style lang="scss" scoped>

</style>