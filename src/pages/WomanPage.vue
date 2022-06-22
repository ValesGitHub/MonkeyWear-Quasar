<template>
  <q-page class="row items-center justify-evenly">
    <h1>DONNA</h1>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();

$q.cookies.set('gender', 'F');
console.log($q.cookies.get('gender'));
</script>
