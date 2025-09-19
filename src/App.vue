<script setup>
// import JSON from './components/JSON.vue';
import Bheader from './components/Bheader.vue';
import Booklist from './components/Booklist.vue';
</script>

<template>
  <Bheader />
  <Booklist />
  <main class="container py-4">
    <router-view></router-view>
  </main>
</template>
