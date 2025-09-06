<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const auth = useAuth()

const username = ref('')
const password = ref('')
const err = ref('')

async function onSubmit() {
  err.value = ''
  const res = await auth.login(username.value.trim(), password.value)
  if (res.ok) {
    router.push(route.query.redirect || '/about')
  } else {
    err.value = res.message || 'Login failed'
  }
}
</script>

<template>
  <div class="container py-4" style="max-width:480px">
    <h2 class="mb-3 text-center">Login</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input class="form-control" v-model="username" placeholder="member@example.com" />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input class="form-control" type="password" v-model="password" placeholder="secret123" />
      </div>
      <button class="btn btn-primary w-100">Sign in</button>
      <p v-if="err" class="text-danger mt-2">{{ err }}</p>
      <p class="text-muted mt-3">Demo: member@example.com / secret123</p>
    </form>
  </div>
</template>
