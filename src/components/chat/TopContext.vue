<script setup lang="ts">
// import { ref } from 'vue';
import { NAvatar, NButton } from 'naive-ui';
import { useAuth } from 'src/composables/auth';
import SearchUser from './SearchUser.vue';

const { user } = useAuth();

defineProps<{ userLoading: boolean }>();
defineEmits<{
  (e: 'refresh'): void;
}>();
</script>
<template>
  <div
    class="
      flex
      justify-between
      items-center
      px-2
      py-3
      top-0
      sticky
      z-1000
      bg-cool-gray-700
      border-b border-lime-400
      shadow-lg shadow-lime-300
    "
  >
    <n-avatar round size="small" :src="user?.image" />

    <search-user />
  </div>
</template>
