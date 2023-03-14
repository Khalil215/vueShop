import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './index.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiHamburgerMenu, HiLogout, BiYoutube, BiTwitter, BiInstagram } from "oh-vue-icons/icons";
// const Fa = Object.values({ ...FaIcons });
addIcons(GiHamburgerMenu, HiLogout, BiYoutube, BiTwitter, BiInstagram);

createApp(App).use(router).use(store).component("v-icon", OhVueIcon).mount('#app')
