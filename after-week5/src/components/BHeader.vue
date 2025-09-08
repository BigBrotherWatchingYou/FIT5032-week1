<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

const auth = useAuth()
const router = useRouter()
function onLogout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills align-items-center">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" active-class="active">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link" active-class="active">About</RouterLink>
        </li>
        <li class="nav-item ms-3">
          <RouterLink
            v-if="!auth.isAuthenticated"
            to="/login"
            class="btn btn-outline-primary btn-sm"
          >Login</RouterLink>
          <button
            v-else
            class="btn btn-outline-danger btn-sm"
            @click="onLogout"
          >Logout</button>
        </li>
        <li class="nav-item">
          <router-link to="FirebaseSigninView" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>
