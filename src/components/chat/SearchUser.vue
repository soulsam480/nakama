<script setup lang="ts">
import { h, onMounted, ref } from 'vue';
import { NDropdown, NButton, NAvatar } from 'naive-ui';
import { useUsers } from 'src/composables/users';
import { User } from 'src/types';
import { useAuth } from 'src/composables/auth';

const value = ref<string | null>(null);

const { allUsers } = useUsers();
const { user } = useAuth();
const userLoading = ref(false);
const users = ref<User[]>([]);

async function refreshUsers() {
  if (userLoading.value) return;
  userLoading.value = true;
  users.value = [];

  try {
    const data = await allUsers(user.value?.id);
    users.value = [...data];
  } catch (error) {
    console.log(error.toString());
  } finally {
    userLoading.value = false;
  }
}

function renderDropdownLabel(option: User) {
  return h('div', null, {
    default: () => option.name,
  });
}

function renderDropdownIcon(option: User) {
  return h(
    NAvatar,
    {
      round: true,
      size: 'small',
      src: option.image,
    },
    {},
  );
}

onMounted(() => refreshUsers());
</script>
<template>
  <n-dropdown
    trigger="click"
    placement="bottom-end"
    :options="users"
    key-field="id"
    label-field="name"
    :render-icon="renderDropdownIcon"
    :render-label="renderDropdownLabel"
  >
    <div class="flex items-center space-x-2">
      <n-button @click="refreshUsers" size="large" type="primary" text :loading="userLoading">
        <template #icon>
          <i-ion-ios-refresh-circle style="font-size: 'inherit'" />
        </template>
      </n-button>

      <n-button text size="large" type="primary" :disabled="userLoading">
        <template #icon>
          <i-ph-chat-teardrop-text-fill style="font-size: 'inherit'" />
        </template>
      </n-button>
    </div>
  </n-dropdown>
</template>
