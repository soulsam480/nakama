<script setup lang="ts">
import { NAvatar } from 'naive-ui';
import { useAuth } from 'src/composables/auth';
import { Chat } from 'src/types';

defineEmits<{
  (e: 'select-chat'): void;
}>();

const { user } = useAuth();

defineProps<{ chat: Chat }>();
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
      transition transition-colors
      duration-300
      ease-in-out
      space-x-3
    "
    @click="$emit('select-chat')"
  >
    <n-avatar
      round
      size="small"
      :src="
        chat.from.id === user?.id
          ? chat.to.image
          : chat.from.image || 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      "
    />
    <div class="flex flex-col space-y-2">
      <div class="text-sm">{{ chat.from.id === user?.id ? chat.to.name : chat.from.name }}</div>
    </div>
  </div>
</template>
