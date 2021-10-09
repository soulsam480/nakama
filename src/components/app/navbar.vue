<script setup lang="ts">
import { NSpace, NLayoutHeader, NButton, NDropdown } from 'naive-ui';
import { DropdownMixedOption } from 'naive-ui/lib/dropdown/src/interface';
import { useAuth } from 'src/composables/auth';
import { useLoader } from 'src/composables/loader';

const { googleSignin, logout, isLoggedIn, user } = useAuth();
const { start, stop } = useLoader();

async function login() {
  try {
    start();
    await googleSignin();
  } catch (error) {
    console.log(error);
  } finally {
    stop();
  }
}

const options: DropdownMixedOption[] = [
  {
    label: 'Log out',
    key: 'logout',
    props: { onClick: logout },
  },
];
</script>
<template>
  <div>
    <n-layout-header class="bg-cool-gray-800 sticky top-0 z-1000" bordered>
      <div class="lg:max-w-4/6 m-auto">
        <n-space justify="space-between" align="center" class="p-2">
          <div class="text-lime-300 text-xl">Nakama</div>

          <n-space justify="space-between" align="center">
            <n-button type="primary" size="small" @click="login" v-if="!isLoggedIn">
              Login | Signup
            </n-button>

            <n-dropdown trigger="click" :options="options" size="small" v-else>
              <n-button type="primary" size="small">
                {{ user?.name }}
              </n-button>
            </n-dropdown>
          </n-space>
        </n-space>
      </div>
    </n-layout-header>
  </div>
</template>
