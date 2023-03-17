<template>
  <div class="w-[80%] md:w-[60%] mx-auto">
    <h1 class="text-2xl text-center mt-6 font-bold">PROFILE</h1>
    <div class="bg-gray-100 flex flex-col p-10 my-10 rounded">
      <div
        className="w-14 h-14 rounded-full bg-back text-white grid items-center text-center mx-auto font-bold text-xl shadow-lg mb-5 uppercase"
      >
        {{initials}}
      </div>
      <div class="mb-5">
        <span class="font-bold">First Name: </span>{{ user.firstName }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Last Name: </span>{{ user.lastName }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Username: </span>{{ user.username }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Email: </span>{{ user.email }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex"
import { computed } from "vue";

const store = useStore()
const user = computed(()=>store.state.user)
const initials = computed(() => store.state.initials);
</script>
