import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import WeatherView from './WeatherView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/signin',
    name: 'FirebaseSignin',
    component: FirebaseSigninView
  },
  {
    path: '/register',
    name: 'FirebaseRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/add-book',
    name: 'AddBook',
    component: AddBookView
  },
  { path: '/user', name: 'User', component: UserDashboard, meta: { requiresAuth: true }, alias: ['/dashboard'] },

  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/Firelogin',
    redirect: { name: 'FirebaseSignin' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router