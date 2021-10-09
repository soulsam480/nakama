<script setup lang="ts">
// import { ref } from 'vue';
import { NAvatar, NButton } from 'naive-ui';
import { useAuth } from 'src/composables/auth';

const { user } = useAuth();
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
    <div>
      <!-- <n-button text type="primary" size="large">
        <template #icon>
          <i-ion-menu
            style="
               {
                font-size: 'inherit';
              }
            "
          />
        </template>
      </n-button> -->
    </div>
  </div>
</template>
