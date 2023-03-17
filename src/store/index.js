import { createStore } from 'vuex'
import { auth, db } from '../services/firbaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'

export default createStore({
  state: {
    showNav: true,
    user: null,
    products: null,
    pageLoaded: null,
    initials: null,
    isUser: null,
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
    product(state, payload) {
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
    },
    setUser(state, payload) {
      state.user = payload
      console.log(state.user)
    },
    setInitials(state){
      state.initials = state.user.firstName.match(/(\b\S)?/g).join("") + state.user.lastName.match(/(\b\S)?/g).join("");
    },
    updateUser(state, payload){
      state.isUser = payload
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
    async signup(context, { email, password, firstName, lastName, username }) {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if(res){
        const docRef = await addDoc(collection(db, "users"),{
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
          uid: res.user.uid
        })

        const q = query(collection(db, 'users'), where('uid', '==', res.user.uid))
        const user = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc=>{
          user.push({...doc.data()})
          // console.log('user', doc)
        })
        const [loggedUser] = user
        
        context.commit('setUser', loggedUser)
        context.commit('setInitials')
      } else {
        throw new Error('could not complete signup')
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password)
      if(res){

        const q = query(collection(db, 'users'), where('uid', '==', res.user.uid))
        const user = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc=>{
          user.push({...doc.data()})
          
        })
        
        const [loggedUser] = user
        context.commit('setUser', loggedUser)
        context.commit('setInitials')
      } else {
        throw new Error('could not complete login')
      }
    },
    async logout(context) {
      await signOut(auth)
      context.commit('setUser', null)
      console.log('loggedout')
    },
    async getCurrentUser(context, {id}){
      // console.log(id) 
      const q = query(collection(db, 'users'), where('uid', '==', id))
        const user = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc=>{
          user.push({...doc.data()})
          // console.log('user', doc.data)
        })
        
        const [loggedUser] = user
        context.commit('setUser', loggedUser)
        context.commit('setInitials')
    }
  },
  modules: {
  }
})
