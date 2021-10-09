<script setup lang="ts">
import { NAvatar } from 'naive-ui';

defineEmits<{
  (e: 'select-chat'): void;
}>();
</script>
<template>
  <div
    class="
      p-2
      m-2
      rounded-md
      bg-lime-200
      hover:bg-lime-300
      cursor-pointer
      flex
      items-center
      transition transition-all
      duration-300
      ease-in-out
      space-x-3
    "
    @click="$emit('select-chat')"
  >
    <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
    <div class="flex flex-col space-y-2">
      <div class="text-sm">Sambit Sahoo</div>
    </div>
  </div>
</template>
