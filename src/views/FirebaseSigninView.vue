<template>
  <h1>Sign In to Your Account</h1>

  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p>
    <button :disabled="loading" @click="signin">
      {{ loading ? 'Signing in…' : 'Sign In' }}
    </button>
  </p>

  <p v-if="errorMsg" style="color:#b00020">{{ errorMsg }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const router = useRouter()
const route  = useRoute()
const auth   = getAuth()

const signin = async () => {
  errorMsg.value = ''
  loading.value = true
  try {
    const cred = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('User signed in:', cred.user)

    // if  were redirected by the guard, go back there; otherwise go to User dashboard
    const to = route.query.redirect ? String(route.query.redirect) : { name: 'User' }
    router.push(to)
  } catch (e) {
    console.error(e?.code || e)
    errorMsg.value = e?.message || 'Failed to sign in.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
