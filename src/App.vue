<template>
  <Navbar />
  <main class="content">
    <transition>
      <RouterView />
    </transition>
  </main>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    Navbar,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.content {
  padding: 1rem;

  @media (min-width: $medium) {
    padding: 2rem 2rem;
  }
}
</style>
