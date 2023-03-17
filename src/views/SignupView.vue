<template>
  <div className="w-[100vw] h-[100vh] flex flex-col justify-center">
    <div className="w-[250px] mx-auto ">
      <div className="text-sm mb-7">
        Already have an account?
        <span className="underline text-theme"><router-link :to="{ name: 'login' }">Login</router-link></span>
      </div>
      <div className="text-2xl font-bold mb-7 text-center">Create Your VueShop Account</div>
      <div className="mb-12 w-full mx-auto text-sm">
        
        <div className=" relative mb-1">
          <input className="bg-slate-200 w-full py-2 px-7 rounded focus:outline-none" type="text" placeholder="First Name" v-model="firstName" />
          <span className="absolute left-1 top-2 text-theme">
            <v-icon name="fa-regular-user" />
          </span>
        </div>

        <div className=" relative mb-1">
          <input className="bg-slate-200 w-full py-2 px-7 rounded focus:outline-none" type="text" placeholder="Last Name" v-model="lastName" />
          <span className="absolute left-1 top-2 text-theme">
            <v-icon name="fa-regular-user" />
          </span>
        </div>

        <div className=" relative mb-1">
          <input className="bg-slate-200 w-full py-2 px-7 rounded focus:outline-none" type="text" placeholder="Username" v-model="username" />
          <span className="absolute left-1 top-2 text-theme">
            <v-icon name="fa-regular-user" />
          </span>
        </div>
        
        <div className=" relative mb-1">
          <input className="bg-slate-200 w-full py-2 px-7 rounded focus:outline-none" type="email" placeholder="Email" v-model="email" />
          <span className="absolute left-1 top-2 text-theme">
            <v-icon name="hi-mail" />
          </span>
        </div>

        <div className=" relative">
          <input className="bg-slate-200 w-full py-2 px-7 rounded focus:outline-none" type="password" placeholder="Password" v-model="password" />
          <span className="absolute left-1 top-2 text-theme">
            <v-icon name="bi-lock-fill" />
          </span>
        </div>
        
      </div>

      <div class="w-fit mx-auto">
        <button className="py-2 px-4 bg-back rounded-full text-white transition-all hover:text-theme">SIGN UP</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted,onUnmounted  } from "vue";
import {useStore} from "vuex"

const firstName= ref('')
const lastName= ref('')
const username = ref('')
const email = ref("");
const password = ref("");

const store = useStore()

onMounted(()=>{
  store.commit('toggleShowNav', false)
})
onUnmounted(()=>{
  store.commit('toggleShowNav', true)
})
</script>

<script>
import OhVueIcon from "oh-vue-icons";
export default {
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>
