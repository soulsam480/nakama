<script setup lang="ts">
import { LoaderKey } from 'src/types';
import { provide, ref } from 'vue';
import Loader from './Loader.vue';

const isLoader = ref(false);

function start() {
  isLoader.value = true;
}

function stop() {
  isLoader.value = false;
}

provide(LoaderKey, { start, stop });
</script>
<template>
  <slot />

  <teleport to="body">
    <loader v-if="isLoader" />
  </teleport>
</template>
