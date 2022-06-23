<template>
  <q-page class="gander-wrapper flex">
    <gender-select
      image="../../public/images/tipa.jpg"
      gender="DONNA"
      class="gander cursor-pointer"
      text_color="pink"
      @click="genderRedirect('donna')"
    >
    </gender-select>

    <gender-select
      image="../../public/images/tipo.jpg"
      gender="UOMO"
      class="gander cursor-pointer"
      text_color="lightblue"
      @click="genderRedirect('uomo')"
    >
    </gender-select>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import GenderSelect from 'src/components/GenderSelect.vue';
import { useRouter } from 'vue-router';
const $q = useQuasar();

const router = useRouter();

if ($q.cookies.get('gender')) {
  const cookieGender = $q.cookies.get('gender');
  genderRedirect(cookieGender === 'M' ? 'uomo' : 'donna');
}

function genderRedirect(gender: string) {
  router.push(gender);
}
</script>

<style>
.gander-wrapper {
  height: 65vh;
}
.gender-wrapper {
  height: 100%;
}

.rout-link {
  text-decoration: none;
  color: inherit;
  border: 1px solid blue;
  height: 100%;
}
</style>
