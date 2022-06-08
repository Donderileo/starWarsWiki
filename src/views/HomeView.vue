<template>
  <main>
    <button @click="store.getMoreCharacters">GetMore!</button>
    <div class="cards">
      <div
        class="card"
        v-for="character in store.characters"
        :key="character.name"
        @click="goToDetails(character.id)"
      >
        <div class="img">
          <img
            :src="`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`"
            alt="`character {{character.name}} from StarWars`"
          />
        </div>
        {{ character.name }}
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted } from "vue";
import { starWarsStore } from "@/stores/starWars.js";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = starWarsStore();
    const router = useRouter();
    onMounted(async () => {
      if (store.characters.length == 0) {
        store.getMoreCharacters();
      }
    });

    function goToDetails(id) {
      router.push(`/character/${id}`);
    }

    return { store, goToDetails };
  },
};
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
}
.card {
  img {
    width: 90%;
    height: auto;
    border: 4px solid black;
  }
}
</style>
