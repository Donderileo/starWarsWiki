<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
  <main class="content">
    <RouterView />
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.content {
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
}
</style>
