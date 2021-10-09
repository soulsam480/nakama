<script setup lang="ts">
import { NSpin } from 'naive-ui';
</script>

<template>
  <div
    wire:loading
    class="
      fixed
      top-0
      left-0
      right-0
      bottom-0
      w-full
      h-screen
      z-10000
      overflow-hidden
      bg-gray-800
      flex flex-col
      items-center
      justify-center
    "
  >
    <n-spin size="large" />
  </div>
</template>
