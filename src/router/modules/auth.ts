import login from '@/views/auth/login.vue'
import password from '@/views/auth/password.vue'
import register from '@/views/auth/register.vue'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/auth',
  component: () => import('@/layouts/auth/index.vue'),
  meta: { guest: true },
  children: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { guest: true },
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: { guest: true },
    },
    {
      path: '/password',
      name: 'password',
      component: password,
      meta: { guest: true },
    },
  ],
} as RouteRecordRaw
