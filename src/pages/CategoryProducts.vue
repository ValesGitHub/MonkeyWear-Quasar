<template>
  <q-page>
    <h1>Ciao</h1>
    {{ gender }}
    {{ currentCategory }}
  </q-page>
</template>

<script setup lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

defineComponent({
  name: 'CategoryProducts',
});

const route = useRoute();

const props = defineProps({
  gender: {
    type: String,
    required: true,
  },
});
const isLoading = ref(true);
const showError = ref(false);
const products = ref([]);
const currentCategory = computed(() => route.params.categoryName);

async function fetchData() {
  isLoading.value = true;
  try {
    const { result, products: newProducts } = await getProducts(
      props.gender,
      currentCategory.value
    );

    if (result.success) {
      products.value = newProducts;
    } else {
      products.value = [];
      showError.value = true;
    }

    isLoading.value = false;
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
