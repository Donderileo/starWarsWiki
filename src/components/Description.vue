<template>
  <div class="description">
    <div class="header">Status</div>
    <div class="info">
      <div class="basic-info">
        <div class="photo">
          <img
            :src="`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`"
            :alt="`Foto de ${character.name}`"
          />
          <span class="name">{{ character.name }}</span>
        </div>
      </div>
      <div class="body">
        <BasicDisplay
          :value="character.height"
          key_="Height"
          icon="height"
          measure="cm"
        ></BasicDisplay>

        <BasicDisplay
          :value="character.mass"
          key_="Mass"
          icon="weight"
          measure="kg"
        ></BasicDisplay>

        <BasicDisplay
          :value="character.hair_color"
          key_="Hair Color"
          icon="hair"
        ></BasicDisplay>

        <BasicDisplay
          :value="character.skin_color"
          key_="Skin Color"
          icon="body"
        ></BasicDisplay>

        <BasicDisplay
          :value="character.gender"
          key_="Gender"
          icon="gender"
        ></BasicDisplay>

        <BasicDisplay
          :value="character.birth_year"
          key_="Birth Year"
          icon="birth"
        ></BasicDisplay>

        <div class="item">
          <img src="/icons/dna.png" alt="" />
          <span class="key">Specie:</span>
          <span
            class="value"
            v-for="(specie, id) in character.species"
            v-if="character.species.length > 0"
          >
            {{ store.species[specie].name }}
            <span
              v-if="
                character.species.length > 1 && id < character.species.length
              "
            >
              ,
            </span>
          </span>
          <span v-else>n/a</span>
        </div>

        <BasicDisplay
          :value="store.homeworlds[character.homeworld].name"
          key_="Homeworld"
          icon="home"
        ></BasicDisplay>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { starWarsStore } from "@/stores/starWars.js";
import BasicDisplay from "./BasicDisplay.vue";

export default defineComponent({
  name: "Description",
  props: {
    character: {
      type: Object,
      default: {},
    },
  },
  setup() {
    const store = starWarsStore();
    return { store };
  },
  components: { BasicDisplay },
});
</script>

<style scoped lang="scss">
.description {
  background: $white;
  min-height: 20rem;
  border-radius: 10px;
  box-shadow: $box-shadow-white;
  color: $black;
  padding-bottom: 1rem;
  justify-self: end;
  width: 100%;
  .header {
    background: $wine;
    font-size: 2rem;
    text-align: center;
    box-shadow: $box-shadow;
    border-radius: 10px;
  }
  .info {
    display: flex;
    gap: 0.5rem;
    .basic-info {
      display: flex;
      gap: 1rem;
      padding: 0.5rem;
      .photo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        max-width: 14rem;

        @media (min-width: $medium) {
          max-width: 18rem;
        }
        img {
          box-sizing: border-box;
          width: 100%;
          border: 4px solid $wine;
          box-shadow: $box-shadow;
        }
        .name {
          font-size: 2.5rem;
          width: 100%;
          color: $wine;
        }
      }
    }
    .item {
      padding-left: 1rem;
      font-size: 1.5rem;
      padding-top: 1rem;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      flex-wrap: wrap;
      img {
        width: 2rem;
      }

      .key {
        font-weight: 600;
      }
    }
  }
}
</style>
