<template>
  <section class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-semibold">User Dashboard</h1>

    <div v-if="user" class="mt-4 space-y-2">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>UID:</strong> {{ user.uid }}</p>

      <div class="mt-6 space-x-2">
        <button @click="goHome">Home</button>
        <button @click="logout">Log out</button>
      </div>
    </div>

    <div v-else class="mt-4">
      <p>Loading your account…</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()

const user = ref(auth.currentUser)
const stop = onAuthStateChanged(auth, (u) => (user.value = u))
onUnmounted(() => stop && stop())

const logout = async () => {
  await signOut(auth)
  router.push({ name: 'FirebaseSignin' })
}

const goHome = () => router.push({ name: 'Home' })
</script>

<style scoped>
button { padding:.5rem .9rem; border:1px solid #ddd; border-radius:.5rem; cursor:pointer }
button + button { margin-left:.5rem }
</style>
