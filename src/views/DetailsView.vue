<template>
  <div class="wrapper" v-if="!loading">
    <div v-for="key in Object.keys(character)" :key="key">
      {{ key }} :{{ character[key] }}
    </div>
    <br />

    Films:
    <div v-for="film in character.films" :key="film">
      <p v-if="store.films[film]">
        {{ store.films[film].title }}
      </p>
    </div>
    <br />

    Homeworld:
    <p v-if="store.homeworlds[character.homeworld]">
      {{ store.homeworlds[character.homeworld].name }}
    </p>
    <br />

    Species:
    <div v-for="specie in character.species" :key="specie">
      <p v-if="store.species[specie]">
        {{ store.species[specie].name }} -
        {{ store.species[specie].classification }}
      </p>
    </div>
    <br />

    Vehicles:
    <div v-for="vehicle in character.vehicles" :key="vehicle">
      <p v-if="store.vehicles[vehicle]">
        {{ store.vehicles[vehicle].name }} - {{ store.vehicles[vehicle].model }}
      </p>
    </div>
    <br />

    Starships:
    <div v-for="starship in character.starships" :key="starship">
      <p v-if="store.starships[starship]">
        {{ store.starships[starship].name }} -
        {{ store.starships[starship].model }}
      </p>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { getDataFromAPI } from "@/services/api.service.js";
import { useRoute } from "vue-router";
import { starWarsStore } from "@/stores/starWars.js";

export default {
  setup() {
    const character = ref({});
    const route = useRoute();
    const store = starWarsStore();
    const loading = ref(true);
    onBeforeMount(async () => {
      character.value = await getDataFromAPI(
        `https://swapi.dev/api/people/${route.params.id}`
      );
      Promise.all([
        store.checkFilms(character.value.films),
        store.checkHomeworld(character.value.homeworld),
        store.checkSpecies(character.value.species),
        store.checkVehicles(character.value.vehicles),
        store.checkStarships(character.value.starships),
      ]).then(() => {
        loading.value = false;
      });
    });

    return { character, store, loading };
  },
};
</script>

<style scoped></style>
