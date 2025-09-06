import { ref, computed } from 'vue'

const isAuthenticated = ref(false)
const user = ref(null)

// demo credentials
const DEMO_USER = 'member@monash.com'
const DEMO_PASS = 'Monash123!'

export function useAuth() {
  async function login(username, password) {
    if (username === DEMO_USER && password === DEMO_PASS) {
      isAuthenticated.value = true
      user.value = { name: 'Member', email: DEMO_USER }
      return { ok: true }
    }
    return { ok: false, message: 'Invalid username or password' }
  }
  function logout() {
    isAuthenticated.value = false
    user.value = null
  }
  return {
    isAuthenticated,
    user,
    isAuthed: computed(() => isAuthenticated.value),
    login,
    logout,
  }
}