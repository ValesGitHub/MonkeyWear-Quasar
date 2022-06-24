<template>
  <q-card class="product-card">
    <q-img :src="props.image" class="relative">
      <q-btn
        :icon="heartIcon"
        round
        class="absolute like-button all-pointer-events"
        @click="$emit('favoriteClick', 'id')"
      >
      </q-btn>
    </q-img>
    <q-card-section class="text-center"
      >{{ props.description }}
    </q-card-section>
    <q-card-section class="text-center text-weight-bolder price">
      {{ props.price }} €
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { matFavorite } from '@quasar/extras/material-icons';
import { defineComponent, defineProps } from 'vue';
defineComponent({
  name: 'ComponentName',
});

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

defineEmits({
  favoriteClick: (id) => {
    if (id) {
      return true;
    } else {
      console.warn('Wrong Committed Id');
      return false;
    }
  },
});

const heartIcon = matFavorite;
</script>

<style scoped lang="scss">
.product-card {
  width: 100%;
  max-width: 300px;
  transition: 0.3s;
  &:hover {
    box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.2);
  }
}

.price {
  font-size: 120%;
  padding: 0px 0 10px;
}

.like-button {
  bottom: 8px;
  color: rgba(0, 0, 0, 0.2);
  right: 8px;
  text-decoration: solid;
  background-color: white;
  transition: 0.2s;
  &:hover {
    color: black;
  }
}
</style>
