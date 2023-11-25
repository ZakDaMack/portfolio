// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      // {
      //   path: '1fit',
      //   name: '1fit',
      //   component: () => import(/* webpackChunkName: "home" */ '@/views/1Fit.vue'),
      // },
      // {
      //   path: 'bluesquare',
      //   name: 'blue-square',
      //   component: () => import(/* webpackChunkName: "home" */ '@/views/Bluesquare.vue'),
      // },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
