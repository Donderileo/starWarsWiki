<template>
  <nav>
    <img
      src="/images/logo-nav.svg"
      alt="Logo Star Wars"
      @click="$router.push('/')"
    />
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style scoped lang="scss">
nav {
  height: 4rem;
  background: $black;
  box-shadow: 0px 2px 5px $white;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    cursor: pointer;
  }
}
</style>
