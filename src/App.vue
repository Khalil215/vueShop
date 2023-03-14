<template>
<Navbar/>
  <router-view />
  <Footer/>
</template>

<script>
// import OhVueIcon from "oh-vue-icons";
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
export default {
  components: {
    Navbar,
    Footer
    // "v-icon": OhVueIcon
  }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  font-family: "Quicksand", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
