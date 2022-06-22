<template>
  <div class="gender-wrapper">
    <div class="gender-div">{{ props.gender }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from 'vue';
defineComponent({
  name: 'GenderSelect',
});

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    require: true,
  },
});
</script>

<style scoped>
.gender-wrapper {
  border: 1px solid blue;
  height: 93vh;
  width: 50%;
}
</style>
