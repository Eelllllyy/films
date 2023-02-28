import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    name: 'Auth',
    component: import("@/modules/Auth/pages/authPage.vue")
  },
  {
    path: '/films',
    name: 'Films',
    component: import("@/modules/Films/pages/allFilmsPage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
