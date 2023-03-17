<template>
  <div v-if="pageLoaded">
    <Navbar v-show="showNav" />
      <router-view/>
    
    <Footer v-show="showNav" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { auth } from './services/firbaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

const store = useStore();
const showNav = computed(() => store.state.showNav);
const pageLoaded = computed(() => store.state.pageLoaded);


const auths = ()=>{
onAuthStateChanged(auth, (user)=>{
  store.commit("updateUser", true)
  console.log(user)
if(user){
  store.dispatch("getCurrentUser", {id: user.uid})
}
})
}

auths() 

const getProducts = ()=>{
  store.dispatch('getProducts')
}
getProducts()
</script>

<script>
// import OhVueIcon from "oh-vue-icons";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
    // "v-icon": OhVueIcon
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  font-family: "Quicksand", sans-serif;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
