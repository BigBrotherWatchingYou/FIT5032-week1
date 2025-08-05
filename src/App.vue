<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import FIT5032Msg from './components/FIT5032Msg.vue'
import JSON from './components/JSON.vue'
import { computed } from 'vue'


//Activity 2.2: Get All Famous Works
const allFamousWorks = computed(() =>
  authors.flatmap((author) => author.allFamousWorks.map((work) => work.title)));



</script>



<template>
  <header>
    <h1>Activity 3.1: Render a list containing author names and their birth years</h1>
      <div>
        <ul>
          <li v-for="author in authors" :key="author.id">
            {{ author.name }} ({{ author.birthYear }})
          </li>
        </ul>
    </div>
  </header>



  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="we did it!" />
      <FIT5032Msg msg="Fit5032 very fun"/>
      <JSON />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
header {
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
}
</style>
