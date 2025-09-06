<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="container py-5 text-center">
    <h2>Access Denied</h2>
    <p class="text-muted">You must be logged in to view this page.</p>
    <button class="btn btn-primary" @click="router.push('/login')">Go to Login</button>
  </div>
</template>
