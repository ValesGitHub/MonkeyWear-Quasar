<template>
  <q-page class="row items-center justify-evenly">
    <h1>UOMO</h1>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();

$q.cookies.set('gender', 'M');
console.log($q.cookies.get('gender'));
</script>
