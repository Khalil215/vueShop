<template>
<div
    v-if="!products"
    className="mt-10 font-bold text-xl text-red-500 h-[100vh]"
  >
    <v-icon name="bi-exclamation-octagon-fill" scale="1.5" fill="red" />
    <span> Failed to Load Page. Please Reload</span>
  </div>
<div v-else>
  <h1 className="text-3xl font-bold mt-4 text-center mb-5">Products</h1>
    <div className="grid gap-20 w-[80%] mx-auto mb-12">
      <div>
        <p class="text-2xl underline font-bold mb-5 text-theme">Smart Phones</p>
        <div class="flex gap-10 flex-wrap">
          <div class="mb-3 w-40 h-40" v-for="phone in phones" :key="phone.id">
              <router-link :to="{name:'product', params:{id: phone.id}}">
                <img :src="phone.thumbnail" class="w-40 h-36 shadow-md rounded-2xl object-cover"/>
                <p class="mt-1 font-bold tracking-wider">{{phone.title}}</p>
              </router-link>
          </div>
        </div>
      </div>
      
      <div>
        <p class="text-2xl underline font-bold mb-5 text-theme">Laptops</p>
        <div class="flex gap-10 flex-wrap">
          <div class="mb-3 w-40 h-40" v-for="laptop in laptops" :key="laptop.id">
              <router-link :to="{name:'product', params:{id: laptop.id}}">
                <img :src="laptop.thumbnail" class="w-40 h-36 shadow-md rounded-2xl object-cover"/>
                <p class="mt-1 font-bold tracking-wider">{{laptop.title}}</p>
              </router-link>
          </div>
        </div>
      </div>
      
      <div>
        <p class="text-2xl underline font-bold mb-5 text-theme">Fragrances</p>
        <div class="flex gap-10 flex-wrap">
          <div class="mb-3 w-40 h-40" v-for="fragrance in fragrances" :key="fragrance.id">
              <router-link :to="{name:'product', params:{id: fragrance.id}}">
                <img :src="fragrance.thumbnail" class="w-40 h-36 shadow-md rounded-2xl object-cover"/>
                <p class="mt-1 font-bold tracking-wider">{{fragrance.title}}</p>
              </router-link>
          </div>
        </div>
      </div>
      
      <div>
        <p class="text-2xl underline font-bold mb-5 text-theme">Skin Care</p>
        <div class="flex gap-10 flex-wrap">
          <div class="mb-3 w-40 h-40" v-for="skin in skins" :key="skin.id">
              <router-link :to="{name:'product', params:{id: skin.id}}">
                <img :src="skin.thumbnail" class="w-40 h-36 shadow-md rounded-2xl object-cover"/>
                <p class="mt-1 font-bold tracking-wider">{{skin.title}}</p>
              </router-link>
          </div>
        </div>
      </div>
      
      <div>
        <p class="text-2xl underline font-bold mb-5 text-theme">Groceries</p>
        <div class="flex gap-10 flex-wrap">
          <div class="mb-3 w-40 h-40" v-for="grocerie in groceries" :key="grocerie.id">
              <router-link :to="{name:'product', params:{id: grocerie.id}}">
                <img :src="grocerie.thumbnail" class="w-40 h-36 shadow-md rounded-2xl object-cover"/>
                <p class="mt-1 font-bold tracking-wider">{{grocerie.title}}</p>
              </router-link>
          </div>
        </div>
      </div>
      
      <div>
        <p class="text-2xl underline font-bold mb-5 text-theme">Home Decoration</p>
        <div class="flex gap-10 flex-wrap">
          <div class="mb-3 w-40 h-40" v-for="home in homes" :key="home.id">
              <router-link :to="{name:'product', params:{id: home.id}}">
                <img :src="home.thumbnail" class="w-40 h-36 shadow-md rounded-2xl object-cover"/>
                <p class="mt-1 font-bold tracking-wider">{{home.title}}</p>
              </router-link>
          </div>
        </div>
      </div>
      
      
    </div>
</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = computed(() => store.state.products);
const phones = computed(() => store.getters.phones);
const laptops = computed(() => store.getters.laptops);
const fragrances = computed(() => store.getters.fragrances);
const skins = computed(() => store.getters.skins);
const groceries = computed(() => store.getters.groceries);
const homes = computed(() => store.getters.homes);

console.log(products)

</script>

<style lang="scss" scoped></style>
