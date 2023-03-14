<template>
  <div className="flex py-5 px-9 sm:pl-28 sm:pr-12 justify-between shadow-lg items-center">
    <div className="font-bold text-xl text-theme">VueShop</div>
    <div className="flex gap-7 font-bold hidden items-center sm:flex">
      <router-link :to="{name:'home'}">HOME</router-link>
      <router-link :to="{name:'products'}">PRODUCTS</router-link>
      <router-link v-if="!user" :to="{name:'login'}">LOGIN/REGISTER</router-link>
      <router-link v-if="user" :to="{name:'profile'}"><p className="w-12 h-12 rounded-full bg-back text-white grid items-center mx-auto">IH</p></router-link>
      <router-link v-if="user" :to="{name:'signup'}"><v-icon  name="hi-logout" scale="1.5"/></router-link>
    </div>
    <div @click="toggleHamburger" className="sm:hidden hover:cursor-pointer">
      <v-icon  name="gi-hamburger-menu" scale="1.5"/>
  </div>

  <transition name="mobile">
    <div  v-if="hamburger" className="absolute h-full w-2/5 bg-back left-0 top-0 text-white">
    <ul className="mt-10 grid items-center gap-5">
      <p v-if="user" className="w-12 h-12 rounded-full bg-theme grid items-center mx-auto">IH</p>
      <router-link :to="{name:'home'}">HOME</router-link>
      <router-link :to="{name:'products'}">PRODUCTS</router-link>
      <router-link v-if="!user" :to="{name:'login'}">LOGIN/REGISTER</router-link>
      <div><v-icon  name="hi-logout" scale="1.5"/></div>
    </ul>
  </div>
  </transition>
  
  </div>
</template>

<script setup>
import {ref} from 'vue'

const user = ref(true)
const hamburger = ref(false)

const toggleHamburger = ()=>{
  hamburger.value = !hamburger.value
  console.log(hamburger.value);
}
</script>


<script>
import OhVueIcon from "oh-vue-icons";
export default {
  components: {
    "v-icon": OhVueIcon
  }
};

</script>




<style scoped>

.router-link-exact-active{
color:#42b983
}

.mobile-enter-active,.mobile-leave-active{
transition: all 1s ease;
}

.mobile-enter-to{
  transform: translateX(0px)
}
.mobile-leave-to,.mobile-enter-from{
  transform: translateX(-250px)
}

</style>