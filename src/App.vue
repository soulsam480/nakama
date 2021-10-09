<script setup lang="ts">
import { NLayout, NLayoutContent } from 'naive-ui';
import Navbar from 'src/components/app/navbar.vue';
</script>
<template>
  <div class="bg-cool-gray-800 min-h-screen">
    <n-layout class="bg-cool-gray-800">
      <navbar />

      <n-layout-content class="bg-cool-gray-800 text-white">
        <div class="p-2 lg:max-w-4/6 m-auto">
          <router-view />
        </div>
      </n-layout-content>
    </n-layout>
  </div>
</template>
