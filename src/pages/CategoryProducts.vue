<template>
  <q-page>
    <h1>Ciao</h1>
  </q-page>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { defineProps } from 'vue';

defineComponent({
  name: 'CategoryProducts',
});

const routerProps = defineProps({
  gender: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

console.log(routerProps.gender + routerProps.category);
</script>
