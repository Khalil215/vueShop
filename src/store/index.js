import { createStore } from 'vuex'

export default createStore({
  state: {
    showNav: true,
    user: true,
    products: null,
    pageLoaded: null
  },
  getters: {
    phones(state) {
      return state.products.slice(0, 5)
    },
    laptops(state) {
      return state.products.slice(5, 10)
    },
    fragrances(state) {
      return state.products.slice(10, 15)
    },
    skins(state) {
      return state.products.slice(15, 20)
    },
    groceries(state) {
      return state.products.slice(20, 25)
    },
    homes(state) {
      return state.products.slice(25, 30)
    },
    product(state, payload){
      return state.products.filter(product => product.id == payload)
    }
  },

  mutations: {
    toggleShowNav(state, payload) {
      state.showNav = payload
    },
    setProducts(state, payload) {
      state.products = payload
    },
    setPage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    getProducts({ state }) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          state.products = data.products
          state.pageLoaded = true
          console.log(state.products)
        })
        .catch((err) => {
          state.pageLoaded = true
        });
    },

  },
  modules: {
  }
})
