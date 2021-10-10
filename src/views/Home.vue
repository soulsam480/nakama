<script setup lang="ts">
import { NLayout, NLayoutContent, NLayoutHeader, NLayoutSider, NAvatar } from 'naive-ui';
import ChatThread from 'src/components/chat/ChatThread.vue';
import TopContext from 'src/components/chat/TopContext.vue';
import { useAuth } from 'src/composables/auth';
import { useChats } from 'src/composables/chats';
import { useScreenWidth } from 'src/composables/screen';
import { useUsers } from 'src/composables/users';
import { Chat, User } from 'src/types';
import { computed, onMounted, ref } from 'vue';
// import { useRoute } from 'vue-router';

const width = useScreenWidth();
const { allUsers } = useUsers();
const { getChats } = useChats();
const { user } = useAuth();
// const $route = useRoute();

const isChatSelected = ref(false);
const userLoading = ref(false);
const users = ref<User[]>([]);
const chats = ref<Chat[]>([]);

const chatContext = ref<string | null>(null);

const isMobile = computed(() => width.value < 600);

const isSidebar = computed(() => !isMobile.value || !isChatSelected.value);

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

async function getAllChats() {
  if (userLoading.value) return;
  userLoading.value = true;
  chats.value = [];

  try {
    const data = await getChats(user.value?.id as string);

    chats.value = [...data];
  } catch (error) {
    console.log(error.toString());
  } finally {
    userLoading.value = false;
  }
}

onMounted(() => getAllChats());
</script>

<template>
  <main>
    <n-layout :has-sider="isSidebar" class="chat bg-cool-gray-700 rounded-md">
      <n-layout-sider
        :native-scrollbar="false"
        :width="isMobile ? '100%' : undefined"
        class="bg-cool-gray-700"
        :class="{ ' border-r border-lime-400': !isMobile }"
        :collapsed="!isSidebar"
        :collapsed-width="0"
        v-if="isSidebar"
      >
        <top-context :user-loading="userLoading" @refresh="refreshUsers" />
        <chat-thread
          v-for="chat in chats"
          :key="chat.id"
          :chat="chat"
          @select-chat="isChatSelected = true"
        />
      </n-layout-sider>

      <n-layout class="h-full bg-cool-gray-700" :native-scrollbar="false">
        <n-layout-header
          class="
            py-3
            px-2
            bg-cool-gray-700
            text-white
            !sticky
            !top-0
            z-1000
            border-b border-lime-400
            shadow-lg shadow-lime-300
          "
        >
          <div class="flex items-center space-x-3">
            <n-avatar
              round
              size="small"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
            <div class="flex flex-col space-y-2">
              <div class="text-sm">Sambit Sahoo</div>
            </div>
          </div>
        </n-layout-header>
        <n-layout-content class="bg-cool-gray-700 text-white p-2" :native-scrollbar="false">
          <!-- <div class="h-[2000px]">ssss</div> -->
        </n-layout-content>
      </n-layout>
    </n-layout>
  </main>
</template>
<style lang="scss">
.chat {
  height: calc(100vh - 70px);
}
</style>
