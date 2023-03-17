<template>
  <div>
    <div
      v-if="loaded"
      
    >
      <div v-if="!product">
        <div
          className="mt-10 font-bold text-xl text-red-500 h-[100vh]"
        >
          <v-icon name="bi-exclamation-octagon-fill" scale="1.5" fill="red" />
          <span> Failed to Load Page. Please Reload</span>
        </div>
      </div>
      <div class="grid md:flex gap-10 md:gap-0 md:mb-10 w-[90%] mx-auto mt-10 " v-else>
        <div class="w-full md:w-[60%] ">
          <img
            :src="product.thumbnail"
            class="h-80 w-72 object-cover mx-auto mb-12 rounded-md shadow-xl"
          />
          <div class="flex flex-wrap gap-6">
            <img
              v-for="image in product.images"
              :key="image"
              :src="image"
              class="h-32 w-32 object-cover rounded-md shadow-md"
            />
          </div>
        </div>
        <div class="w-full md:w-[60%]">
          <p class="mb-1 text-theme font-bold uppercase">{{ product.category }}</p>
          <h2 class="text-2xl font-bold mb-1">{{ product.title }}</h2>
          <p class="mb-6">{{ product.brand }}</p>
          <div>
            <span class="text-xl font-bold">${{ product.price }}</span
            ><span class="py-1 px-3 ml-3 bg-theme text-white rounded-full">
              {{ product.discountPercentage }}% Discount</span
            >
          </div>
          <div class="mt-6 font-bold italic">{{ product.description }}</div>
          <hr class="my-3" />
          <div class="mb-1">
            <span class="font-bold">Stock:</span> {{ product.stock }}
          </div>
          <div class="mb-10">
            <span class="font-bold">Rating:</span> {{ product.rating }}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="w-[100vw] h-[100vh]"></div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";

const loaded = ref(false);
const product = ref(null);
const discount = ref(null);
const route = useRoute();

const fetchh = () => {
  fetch(`https://dummyjson.com/products/${route.params.id}`)
    .then((res) => res.json())
    .then((data) => {
      product.value = data;
      discount.value = product.discountPercentage;
      loaded.value = true;
    })
    .catch((err) => {
      loaded.value = true;
      console.log(err);
    });
};

onMounted(() => {
  fetchh();
});
</script>
