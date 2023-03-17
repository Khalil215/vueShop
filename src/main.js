import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './index.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiHamburgerMenu, HiLogout, BiYoutube, BiTwitter, BiInstagram, FaRegularUser, HiMail, BiLockFill, BiExclamationOctagonFill,FaSpinner } from "oh-vue-icons/icons";

addIcons(GiHamburgerMenu, HiLogout, BiYoutube, BiTwitter, BiInstagram, FaRegularUser, HiMail, BiLockFill, BiExclamationOctagonFill,FaSpinner);

createApp(App).use(router).use(store).component("v-icon", OhVueIcon).mount('#app')
