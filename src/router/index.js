import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import NotFound from '../views/NotFound.vue'
import ProductView from '../views/ProductView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import ProfileView from '../views/ProfileView.vue'
import { auth } from '../services/firbaseConfig'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home",
      requiresAuth: false,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: "Login",
      requiresAuth: false,
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: "Sign up",
      requiresAuth: false,
    }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView,
    meta: {
      title: "Products",
      requiresAuth: true,
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetailsView,
    meta: {
      title: "Product",
      requiresAuth: true,
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: "Profile",
      requiresAuth: true,
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

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | VueShop`;
  next();
})

router.beforeEach((to, from, next) => {
  let user = auth.currentUser
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      
      return next()
    }
    return next({ name: "login" })
  }
  return next()
})


export default router
