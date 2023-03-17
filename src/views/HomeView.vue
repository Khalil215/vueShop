<template>
  <div
    v-if="!products"
    className="mt-10 font-bold text-xl text-red-500 h-[100vh]"
  >
    <v-icon name="bi-exclamation-octagon-fill" scale="1.5" fill="red" />
    <span> Failed to Load Page. Please Reload</span>
  </div>

  <div v-else className="w-full grid">
    <div className="flex flex-col sm:flex-row sm:h-[350px] mt-5">
      <div
        className="w-full sm:w-[55%] order-2 sm:order-1 flex flex-col text-white justify-center bg-back text-left h-[350px]"
      >
        <div className="w-[60%] mx-auto">
          <div className="font-bold text-3xl">PHONES AND LAPTOPS</div>
        </div>
      </div>
      <div className="w-full h-[350px] sm:w-[45%] order-1 sm:order-2">
        <img
          :src="products[1].thumbnail"
          className="object-contain h-full w-full"
        />
      </div>
    </div>

    <div className="flex flex-col sm:flex-row sm:h-[350px]">
      <div
        className="w-full sm:w-[55%] order-2 flex flex-col text-black justify-center bg-gray-100 text-left h-[350px]"
      >
        <div className="w-[60%] mx-auto">
          <div className="font-bold text-3xl">FRAGRANCES AND SKIN CARE</div>
        </div>
      </div>
      <div className="w-full h-[350px] sm:w-[45%] order-1">
        <img
          :src="products[10].thumbnail"
          className="object-cover object-left h-full w-full"
        />
      </div>
    </div>

    <div className="flex flex-col sm:flex-row sm:h-[350px]">
      <div
        className="w-full sm:w-[55%] order-2 sm:order-1 flex flex-col text-white justify-center bg-back text-left h-[350px]"
      >
        <div className="w-[60%] mx-auto">
          <div className="font-bold text-3xl">GROCERIES</div>
        </div>
      </div>
      <div className="w-full h-[350px] sm:w-[45%] order-1 sm:order-2">
        <img
          :src="products[24].thumbnail"
          className="object-contain h-full w-full"
        />
      </div>
    </div>

    <div className="flex flex-col sm:flex-row sm:h-[350px]">
      <div
        className="w-full sm:w-[55%] order-2 flex flex-col text-black justify-center bg-gray-100 text-left h-[350px]"
      >
        <div className="w-[60%] mx-auto">
          <div className="font-bold text-3xl">HOME DECORATION</div>
        </div>
      </div>
      <div className="w-full h-[350px] sm:w-[45%] order-1">
        <img
          :src="products[25].thumbnail"
          className="object-contain h-full w-full"
        />
      </div>
    </div>

    <div v-show="!user"
      className="flex flex-col sm:flex-row justify-between w-1/2 gap-10 mx-auto py-10"
    >
      <div class="text-left">
        WANT TO SEE ALL OUR PRODUCTS? REGISTER YOUR FREE ACCOUNT TODAY
      </div>
      <router-link :to="{ name: 'login' }"
        ><button className="text-theme bg-back px-3 py-1 rounded-full">
          REGISTER
        </button></router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = computed(() => store.state.products);
const user = computed(()=>store.state.user)
console.log(products.value[0]);
</script>

<script>
import OhVueIcon from "oh-vue-icons";
export default {
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>
