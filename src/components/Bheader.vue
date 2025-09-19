<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">
            Home (Week 5)
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>

        <!-- This single slot toggles between "Firebase Signin" and "Log out" -->
        <li class="nav-item">
          <!-- Logged OUT: show Signin -->
          <router-link
            v-if="!user"
            :to="{ name: 'FirebaseSignin' }"
            class="nav-link"
            active-class="active"
          >
            Firebase Signin
          </router-link>

          <!-- Logged IN: show Log out -->
          <button
            v-else
            class="nav-link btn btn-link p-0"
            @click="logout"
            title="Sign out"
          >
            Log out
          </button>
        </li>

        <li class="nav-item">
          <router-link to="/register" class="nav-link" active-class="active">
            Firebase Register
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/add-book" class="nav-link" active-class="active">
            Add Book
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()

// reactive user so the label flips immediately after sign-in/sign-out
const user = ref(auth.currentUser)
const stop = onAuthStateChanged(auth, (u) => (user.value = u))
onUnmounted(() => stop && stop())

const logout = async () => {
  await signOut(auth)                 // logs out the current user
  user.value = null                   // update header instantly
  router.push({ name: 'FirebaseSignin' }) // back to sign-in page
}
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
.form-control-dark { color:#fff; background-color:var(--bs-dark); border-color:var(--bs-gray); }
.form-control-dark:focus {
  color:#fff; background-color:var(--bs-dark); border-color:#fff;
  box-shadow:0 0 0 0.25rem rgba(255,255,255,0.25);
}
.bi { vertical-align:-0.125em; fill:currentColor; }
.text-small { font-size:85%; }
.dropdown-toggle { outline:0; }
</style>
