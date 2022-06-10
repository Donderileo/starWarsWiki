<template>
  <header>
    <div class="text-group">
      <p class="title">
        Star Wars Wiki
        <img
          src="/images/duel.png"
          alt="Sabres de luz um vermelho e outro azul em formato de X"
        />
      </p>
      <p class="page-text">{{ text }}</p>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped lang="scss">
header {
  font-family: "Raleway", sans-serif;

  display: flex;
  justify-content: center;
  padding: 3rem 0;
  flex-direction: column;
  gap: 1rem;

  .title {
    color: $black;
    font-size: 4rem;
    font-weight: 900;
    -webkit-text-stroke: 1px $yellow-logo;
  }
  .page-text {
    color: $white;
    font-size: 2rem;
    font-weight: 600;
  }

  img {
    width: 5rem;
  }
}
</style>
