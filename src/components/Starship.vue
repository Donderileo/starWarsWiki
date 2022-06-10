<template>
  <div class="starship">
    <div class="img-name">
      <img
        :src="`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`"
        :alt="`Starship ${name}`"
      />
      <div class="name">{{ name }}</div>
      <div class="model">
        {{ model }}
      </div>
      <div class="class">{{ starship_class }}</div>
    </div>
    <div class="info">
      <BasicDisplay
        :value="manufacturer"
        key_="Manufacturer"
        icon="manufacturer"
      />
      <BasicDisplay
        :value="cost_in_credits"
        key_="Cost"
        icon="cost"
        measure="credits"
      />
      <BasicDisplay :value="length" key_="Length" icon="length" measure="m" />
      <BasicDisplay
        :value="max_atmosphering_speed"
        key_="Max ATM Speed"
        icon="speed"
        measure="mph"
      />
      <BasicDisplay
        :value="hyperdrive_rating"
        key_="Hyperdrive Rating"
        icon="rating"
      />

      <BasicDisplay
        :value="`${crew}/${cargo_capacity}`"
        key_="Crew/Capacity"
        icon="crew"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { starWarsStore } from "@/stores/starWars.js";
import BasicDisplay from "@/components/BasicDisplay.vue";
export default defineComponent({
  name: "Starship",
  props: {
    name: {
      type: String,
      default: "",
    },
    model: {
      type: String,
      default: "",
    },
    manufacturer: {
      type: String,
      default: "",
    },
    length: {
      type: String,
      default: "",
    },
    max_atmosphering_speed: {
      type: String,
      default: "",
    },
    crew: {
      type: String,
      default: "",
    },
    passenger: {
      type: String,
      default: "",
    },
    cargo_capacity: {
      type: String,
      default: "",
    },
    hyperdrive_rating: {
      type: String,
      default: "",
    },
    starship_class: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    cost_in_credits: {
      type: String,
      default: "",
    },
  },
  components: {
    BasicDisplay,
  },
  setup(props) {
    const store = starWarsStore();
    return { store };
  },
});
</script>

<style scoped lang="scss">
.starship {
  display: flex;
  padding: 1rem;
  img {
    width: 15rem;
    height: 15rem;
    border: 4px solid $wine;
    box-shadow: $box-shadow;
  }
  .img-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;

    .name {
      font-size: 2rem;
      color: $red;
      font-weight: 600;
    }
    .model {
      font-size: 1.3rem;
    }
    .class {
      font-size: 1.1rem;
    }
  }
}
</style>
