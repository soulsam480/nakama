import { useAuth } from 'src/composables/auth';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('src/views/Index.vue'),
      meta: { skipAuth: true },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('src/views/Home.vue'),
    },
  ],
});

router.beforeEach((to, _, next) => {
  const { isLoggedIn } = useAuth();

  const { skipAuth } = to.meta;

  if (skipAuth) {
    if (isLoggedIn.value) return next('/home');
    return next();
  }

  if (!isLoggedIn.value) return next('/');

  return next();
});

export default router;
