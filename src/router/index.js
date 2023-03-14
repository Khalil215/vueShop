import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import NotFound from '../views/NotFound.vue'
import ProductView from '../views/ProductView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: "Login"
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: "Sign up"
    }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView,
    meta: {
      title: "Products"
    }
  },
  {
    path: '/product',
    name: 'product',
    component: ProductDetailsView,
    meta: {
      title: "Product"
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: "Profile"
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: "404-page"
    }
  },]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title} | VueShop`;
  next();
})

export default router
