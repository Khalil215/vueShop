<template>
  <Loader v-show="loading"/>
  <div className="w-[100vw] h-[100vh] flex flex-col justify-center">
    <form @submit.prevent="handleSubmit" className="w-[250px] mx-auto ">
      <div className="text-sm mb-7">
        Don't have an account?
        <span className="underline text-theme"
          ><router-link :to="{ name: 'signup' }">Register</router-link></span
        >
      </div>
      <div className="text-2xl font-bold mb-7 text-center">
        Login to VueShop to see our Products
      </div>
      <div className="mb-12 w-full mx-auto text-sm">
        <div className=" relative mb-1">
          <input
            required
            className="bg-slate-200 w-full py-2 px-7 rounded focus:outline-none"
            type="email"
            placeholder="Email"
            v-model="email"
          />
          <span className="absolute left-1 top-2 text-theme">
            <v-icon name="hi-mail" />
          </span>
        </div>
        <div className=" relative">
          <input
            required
            className="bg-slate-200 w-full py-2 px-7 rounded focus:outline-none"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <span className="absolute left-1 top-2 text-theme">
            <v-icon name="bi-lock-fill" />
          </span>
        </div>
      </div>
      <div class="w-fit mx-auto">
        <button
          type="submit"
          className="py-2 px-4 bg-back rounded-full text-white transition-all hover:text-theme"
        >
          SIGN IN
        </button>
      </div>
      <div v-if="error" class="mt-3 text-sm text-red-500">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { auth } from "../services/firbaseConfig";
import Loader from "../components/Loader.vue";

const email = ref("");
const password = ref("");
const error = ref(null);
const loading = ref(false);

const router = useRouter();
const store = useStore();

const handleSubmit = async () => {
  try {
    loading.value = true
    await store.dispatch("login", {
      email: email.value,
      password: password.value,
    });
    loading.value = false
    router.push("/");
  } catch (err) {
    error.value = err.message;
    loading.value = false
  }
};

onMounted(() => {
  let user = auth.currentUser;
  if (user) {
    router.push("/");
  } else {
    store.commit("toggleShowNav", false);
  }
});
onUnmounted(() => {
  store.commit("toggleShowNav", true);
});
</script>

<script>
import OhVueIcon from "oh-vue-icons";
export default {
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>
