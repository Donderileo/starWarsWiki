<template>
  <div class="starships">
    <div class="header">Starships</div>
    <div class="body" v-if="starships.length > 0">
      <div v-for="starship in starships" :key="starship">
        <Starship
          :name="store.starships[starship].name"
          :model="store.starships[starship].model"
          :manufacturer="store.starships[starship].manufacturer"
          :cost_in_credits="store.starships[starship].cost_in_credits"
          :length="store.starships[starship].length"
          :max_atmosphering_speed="
            store.starships[starship].max_atmosphering_speed
          "
          :crew="store.starships[starship].crew"
          :passenger="store.starships[starship].passenger"
          :cargo_capacity="store.starships[starship].cargo_capacity"
          :hyperdrive_rating="store.starships[starship].hyperdrive_rating"
          :starship_class="store.starships[starship].starship_class"
          :id="store.starships[starship].id"
        >
        </Starship>
      </div>
    </div>
    <div class="full" v-else>This character don't have any starships</div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { starWarsStore } from "@/stores/starWars.js";
import Starship from "./Starship.vue";
export default defineComponent({
  name: "Starships",
  props: {
    starships: {
      type: Array,
      default: [],
    },
  },
  components: {
    Starship,
  },
  setup(props, context) {
    const store = starWarsStore();
    onMounted(() => {
      props.starships.forEach((starship) => {
        const url = store.starships[starship].url.split("/");
        url.pop();
        store.starships[starship].id = url.pop();
      });
    });
    return { store };
  },
});
</script>

<style scoped lang="scss">
.starships {
  background: $white;
  min-height: 20rem;
  border-radius: 10px;
  box-shadow: $box-shadow-white;
  color: $black;
  .header {
    background: $wine;
    font-size: 2rem;
    text-align: center;
    box-shadow: $box-shadow;
    border-radius: 10px;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (min-width: $medium) {
      flex-direction: row;
    }
  }
  .full {
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
}
</style>
