<template>
  <q-page>
    <div
      v-if="showProducts"
      class="flex wrap justify-center q-mt-xl"
      ref="proWrapper"
    >
      <product-card
        v-for="product in products"
        :key="product.id"
        :image="product.url"
        :description="product.description"
        :price="product.price"
        class="q-ma-md"
        @favorite-click="toggleFavoriteState(product.id)"
      ></product-card>
    </div>
    <q-spinner class="spin" size="50px" v-if="isLoading"></q-spinner>
  </q-page>
</template>

<script setup lang="ts">
import { useFavoriteProducts } from 'src/composables/useFavoriteProducts';
import { computed, defineComponent, ref, watch } from 'vue';
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { getProducts } from '../api/productsApi';
import ProductCard from '../components/ProductCard.vue';

import {
  Product,
  AvailableGenders,
  AvailableProductCategories,
} from '../components/models';
import { useQuasar } from 'quasar';

const { favoriteArray, toggleFavoriteState } = useFavoriteProducts();

const route = useRoute();

const props = defineProps({
  gender: {
    type: String as () => AvailableGenders,
    required: true,
  },
});
const proWrapper = ref();
const showProducts = ref(false);
const isLoading = ref(true);
const showError = ref(false);
const products = ref<Product[]>([]);
type tipo = AvailableProductCategories;
const currentCategory = computed(() => route.params.categoryName as tipo);

const $q = useQuasar();

async function fetchData() {
  isLoading.value = true;
  if (proWrapper.value) {
    proWrapper.value.style.opacity = '0.5';
  }

  try {
    const { result, products: newProducts } = await getProducts(
      props.gender,
      currentCategory.value
    );

    if (result.success) {
      products.value = newProducts;
      showProducts.value = true;
      // console.log(products.value);
    } else {
      products.value = [];
      showError.value = true;
    }

    isLoading.value = false;
    proWrapper.value.style.opacity = '1';
  } catch (e) {
    // Gestisci errore connessione
  }
}

watch(
  () => route.params,
  () => {
    fetchData();
  },
  { immediate: true }
);
</script>

<style>
.products-wrapper {
  opacity: 0.5;
}
.spin {
  position: absolute;
  top: 30%;
  left: 50%;
}
</style>
