import { createRouter, createWebHistory } from 'vue-router'

import WeatherView from '@/views/WeatherView.vue'

const routes = [

  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router