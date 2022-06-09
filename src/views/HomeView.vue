<template>
  <main>
    <button @click="store.getMoreCharacters">GetMore!</button>
    {{ store.busy }}
    <div class="cards" ref="scrollComponent">
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
      <div v-for="index in 10" :key="index" v-if="store.busy">
        <ProgressSpinner />
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import { starWarsStore } from "@/stores/starWars.js";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = starWarsStore();
    const router = useRouter();
    const scrollComponent = ref(null);
    onMounted(async () => {
      if (store.characters.length == 0) {
        await store.getMoreCharacters();
        await store.getMoreCharacters();
      }
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    function goToDetails(id) {
      router.push(`/character/${id}`);
    }

    function handleScroll(e) {
      if (!store.busy) {
        let element = scrollComponent.value;
        if (element.getBoundingClientRect().bottom - 200 < window.innerHeight) {
          store.getMoreCharacters();
        }
      }
    }

    return { store, goToDetails, scrollComponent };
  },
};
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
