<template>
  <div class="gender-wrapper">
    <div class="gender-div">
      {{ props.gender }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, onMounted } from 'vue';
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
  text_color: {
    type: String,
    require: true,
  },
});

onMounted(() => {
  let divImage = document.querySelectorAll<HTMLDivElement>('.gender-div');
  const i = props.gender === 'DONNA' ? 0 : 1;
  const url = `url(${props.image})`;
  console.log(props.image);
  if (divImage && props.text_color) {
    divImage[i].style.backgroundImage = url;
    divImage[i].style.color = props.text_color;
  }
});
</script>

<style scoped>
.gender-wrapper {
  width: 50%;
}

.gender-div {
  display: flex;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 20%;
  text-align: center;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-lr;
  width: 100%;
  font-size: 4em;
  font-weight: bold;
}
</style>
