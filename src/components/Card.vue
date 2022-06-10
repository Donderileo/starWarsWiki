<template>
  <div class="card">
    <div class="name">{{ character.name }}</div>
    <div class="image">
      <img
        :src="`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`"
        :alt="`Foto de ${character.name}`"
      />
    </div>
    <div class="body">
      <div class="homeworld">
        <div class="key">Homeworld:</div>
        <div class="value" v-if="store.homeworlds[character.homeworld]">
          {{ store.homeworlds[character.homeworld].name }}
        </div>
        <div v-else>
          <ProgressSpinner style="width: 50px; height: 50px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { starWarsStore } from "@/stores/starWars.js";

export default defineComponent({
  name: "Card",
  props: {
    character: {
      type: Object,
      default: {
        name: "",
        image:
          "https://starwars-visualguide.com/assets/img/characters/default.jpg",
        films: [],
      },
    },
  },
  setup(props, context) {
    const store = starWarsStore();
    onMounted(() => {
      store.checkHomeworld(props.character.homeworld);
    });

    return { store };
  },
});
</script>

<style scoped lang="scss">
.card {
  padding: 0.4rem 0;
  font-weight: 900;
  background: $border-white;
  cursor: pointer;
  transition: 0.3s ease all;
  &:hover {
    box-shadow: $box-shadow-turq;
  }
  .image {
    img {
      box-sizing: border-box;
      width: 100%;
      height: auto;
      box-shadow: $box-shadow;
      border-top: 4px solid $yellow-logo;
      border-bottom: 4px solid $yellow-logo;
    }
  }
  .name {
    text-align: center;
    color: $black;
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 600;
    @media (min-width: $small) {
      -webkit-text-stroke: 0.5px $white;
    }
  }
  .body {
    .homeworld {
      text-align: center;
      padding: 0.5rem;
      .key {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.5rem;
        color: $black;
      }

      .value {
        font-size: 1.5rem;
        font-weight: 800;
        color: $black;
        -webkit-text-stroke: 0.2px $white;
      }
    }
  }
}
</style>
