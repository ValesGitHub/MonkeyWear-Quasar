<template>
  <q-layout view="hhh lpR fFf">
    <q-header elevated class="bg-grey-14 text-white">
      <q-btn-group
        class="button-group"
        v-if="$q.screen.gt.sm"
        :style="{ pointerEvents: pointer }"
      >
        <q-btn
          class="col"
          :class="{ active: isActive }"
          v-for="category in TOTAL_CATEGORIES"
          :key="category"
          @click="getCategoryClick(category)"
        >
          {{ category }}
        </q-btn>
      </q-btn-group>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

defineComponent({
  name: 'TabsLayout',
});

const TOTAL_CATEGORIES: string[] = ['abbigliamento', 'scarpe', 'accessori'];

const $q = useQuasar();
const router = useRouter();
let isActive = ref(false);
let pointer = ref('all');

function getCategoryClick(category: string) {
  pointer.value = 'none';
  const gender = $q.cookies.get('gender') === 'M' ? 'uomo' : 'donna';
  isActive.value = true;
  router.push(`/${gender}/${category}`);
  setTimeout(() => {
    pointer.value = 'all';
  }, 2000);
}
</script>

<style scoped>
.button-group {
  width: 100%;
  height: 100%;
}
</style>
