<template>
  <div className="flex py-5 px-9 sm:pl-28 sm:pr-12 justify-between shadow-lg items-center">
    <div className="font-bold text-xl text-theme">VueShop</div>
    <div className="gap-7 font-bold hidden items-center sm:flex">
      <router-link :to="{name:'home'}">HOME</router-link>
      <router-link :to="{name:'products'}">PRODUCTS</router-link>
      <router-link v-if="!user" :to="{name:'login'}">LOGIN/REGISTER</router-link>
      <router-link v-if="user" :to="{name:'profile'}"><p className="w-12 h-12 rounded-full bg-back text-white grid items-center text-center mx-auto">IH</p></router-link>
      <router-link v-if="user" :to="{name:'signup'}"><v-icon  name="hi-logout" scale="1.5"/></router-link>
    </div>
    <div @click="toggleHamburger" className="sm:hidden hover:cursor-pointer">
      <v-icon  name="gi-hamburger-menu" scale="1.5"/>
  </div>

  <transition name="mobile">
    <div  v-if="hamburger" className="fixed flex h-full w-full left-0 top-0 text-white z-10">
    <div className="w-2/5 h-full bg-back"><ul className="mt-10 flex flex-col items-center gap-5">
      <router-link :to="{name:'profile'}">
        <p v-if="user" className="w-12 h-12 rounded-full bg-theme grid items-center text-center mx-auto hover:cursor-pointer text-black">IH</p>
      </router-link>
      <router-link :to="{name:'home'}">HOME</router-link>
      <router-link :to="{name:'products'}">PRODUCTS</router-link>
      <router-link v-if="!user" :to="{name:'login'}">LOGIN/REGISTER</router-link>
      <div v-if="user" className="hover:text-theme hover:cursor-pointer transition-all"><v-icon  name="hi-logout" scale="1.5"/></div>
    </ul></div>
    <div @click="toggleHamburger" className="w-3/5 h-full bg-transparent"></div></div>
  </transition>
  
  </div>
</template>

<script setup>
import { ref,computed } from "vue";
import {useStore} from "vuex"

const store = useStore()
const user = computed(()=>store.state.user)

const hamburger = ref(false)

const toggleHamburger = ()=>{
  hamburger.value = !hamburger.value
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