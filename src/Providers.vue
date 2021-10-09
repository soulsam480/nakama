<script setup lang="ts">
import { NConfigProvider, NLoadingBarProvider } from 'naive-ui';
import App from './App.vue';
import LoaderProvider from './components/app/loader/LoaderProvider.vue';
</script>
<template>
  <n-config-provider
    :theme-overrides="{ common: { primaryColor: '#65A30D', primaryColorHover: '#84CC17' } }"
  >
    <n-loading-bar-provider>
      <loader-provider>
        <app />
      </loader-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
