<script setup>

import BHeader from './components/BHeader.vue'

</script>

<template>
  <div class="main-container">
  <header v-if="showHeader">
    <BHeader />
  </header>
  <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">Get Weather</router-link>
        </li>
  <main class="main-box">
    <!-- <LibraryRegistrationForm /> -->
    <!-- <JSONLab />    -->
    
    <router-view></router-view>
    
  </main>
</div>
</template>

<script>

</script>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
    link:https://fit5032-week1.pages.dev/
} */
</style>
