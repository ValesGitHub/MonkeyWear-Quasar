<template>
  <q-layout view="hhh lpR fFf">
    <q-header elevated class="bg-grey-14 text-white">
      <q-btn-group class="button-group" v-if="$q.screen.gt.sm">
        <q-btn class="col" :to="{ name: 'abbigliamento' + currentGender }"
          >Abbigliamento</q-btn
        >
        <q-btn class="col" :to="{ name: 'scarpe' + currentGender }"
          >Scarpe</q-btn
        >
        <q-btn class="col" :to="{ name: 'accessori' + currentGender }"
          >Accessori</q-btn
        >
      </q-btn-group>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
defineComponent({
  name: 'TabsLayout',
});

const $q = useQuasar();

const currentGender = computed(() => {
  console.log($q.cookies.get('gender'));
  return $q.cookies.get('gender') === 'M' ? 'Uomo' : 'Donna';
});
</script>

<style scoped>
.button-group {
  width: 100%;
  height: 100%;
}
</style>
