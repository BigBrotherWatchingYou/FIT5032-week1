import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import { useAuth } from '@/stores/auth'

const LoginView = () => import('@/views/LoginView.vue')
const AccessDenied = () => import('@/views/AccessDenied.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView, meta: { requiresAuth: false } },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/denied', name: 'denied', component: AccessDenied },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuth()
  if (to.meta.requiresAuth && !auth.isAuthenticated.value) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if (to.name === 'login' && auth.isAuthenticated.value) {
    return { name: 'about' }
  }
})

export default router