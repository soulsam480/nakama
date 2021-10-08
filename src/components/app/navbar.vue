<script setup lang="ts">
import { NSpace, NLayoutHeader, NButton } from 'naive-ui';
import { useAuth } from 'src/composables/auth';

const { googleSignin } = useAuth();

async function login() {
  try {
    const data = await googleSignin();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <div>
    <n-layout-header class="bg-cool-gray-800" bordered>
      <div class="lg:max-w-4/6 m-auto">
        <n-space justify="space-between" align="center" class="p-2">
          <div class="text-lime-300 text-xl">Nakama</div>

          <n-space justify="space-between">
            <n-button type="primary" size="small" @click="login">Login | Signup</n-button>
          </n-space>
        </n-space>
      </div>
    </n-layout-header>
  </div>
</template>
