<template>
  <div class="wrapper" v-if="!loading">
    <router-link to="/" class="voltar"> Voltar </router-link>

    <div class="container">
      <Description :character="character" />
      <Films :films="character.films" />
      <div class="starships">
        <Starships :starships="character.starships"></Starships>
      </div>
    </div>
  </div>
  <div v-else class="flex-center">
    <ProgressSpinner
      style="width: 20rem; height: 20rem"
      strokeWidth="2"
    ></ProgressSpinner>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { getDataFromAPI } from "@/services/api.service.js";
import { useRoute } from "vue-router";
import { starWarsStore } from "@/stores/starWars.js";
import Card from "../components/Card.vue";
import Description from "../components/Description.vue";
import Films from "../components/Films.vue";
import Starships from "../components/Starships.vue";

import { computed } from "@vue/reactivity";

export default {
  components: {
    Card,
    Description,
    Starships,
    Films,
  },
  setup() {
    const character = ref({});
    const route = useRoute();
    const store = starWarsStore();
    const loading = ref(true);
    const selected = ref(true);

    onBeforeMount(async () => {
      character.value = await getDataFromAPI(
        `https://swapi.dev/api/people/${route.params.id}`
      );
      character.value.id = route.params.id;
      await store.checkFilms(character.value.films);
      await store.checkHomeworld(character.value.homeworld);
      await store.checkSpecies(character.value.species);
      await store.checkVehicles(character.value.vehicles);
      await store.checkStarships(character.value.starships);
      loading.value = false;
    });

    return { character, store, loading, selected };
  },
};
</script>

<style scoped lang="scss">
* {
  color: $white;
}
.wrapper {
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .voltar {
    font-size: 3rem;
    transition: 0.3s ease all;
    &:hover {
      color: $yellow-logo;
    }
  }
}
.container {
  margin-top: 2.5rem;
  max-width: 85rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: $medium) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: center;

    .starships {
      grid-column: 1/3;
      justify-self: center;
    }
  }
  .basic-info {
    display: flex;
    gap: 1rem;
    .photo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      max-width: 15rem;
      img {
        box-sizing: border-box;
        width: 100%;
        border: 4px solid $white;
      }
      .name {
        font-size: 2rem;
        width: 100%;
        color: $white;
      }
    }
  }
}
.flex-center {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
