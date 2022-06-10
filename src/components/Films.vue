<template>
  <div class="films">
    <div class="header">Films</div>
    <div class="body">
      <carousel :items-to-show="1" snapAlign="center" :wrapAround="true">
        <slide v-for="film in filmsArr" :key="film.id">
          <div class="carousel__item">
            <img
              class="img"
              :src="`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`"
              :alt="`${film.title} banner`"
            />
            <div class="title">{{ film.title }}</div>
            <div class="director">{{ film.director }}</div>
            <div class="release">{{ film.release_date }}</div>
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { starWarsStore } from "@/stores/starWars.js";
import "@/assets/scss/carousel.scss";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default defineComponent({
  name: "Films",
  props: {
    films: {
      type: Array,
      default: [],
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup(props, context) {
    const store = starWarsStore();
    const filmsArr = ref([]);

    onMounted(() => {
      props.films.forEach((filmLink) => {
        const film = store.films[filmLink];
        filmsArr.value.push({
          title: film.title,
          director: film.director,
          release_date: film.release_date,
          id: film.episode_id,
        });
      });
    });
    return { store, filmsArr };
  },
});
</script>

<style scoped lang="scss">
.films {
  background: $white;
  min-height: 20rem;
  border-radius: 10px;
  box-shadow: $box-shadow-white;
  color: $black;
  max-width: 42rem;
  align-self: center;
  .header {
    background: $wine;
    font-size: 2rem;
    text-align: center;
    box-shadow: $box-shadow;
    border-radius: 10px;
  }
  .body {
    padding: 3rem;

    .title {
      font-size: 1.5rem;
      color: $red;
      line-height: 2rem;
    }

    .director {
      font-size: 1.2rem;
    }
    img {
      max-width: 15rem;
    }
  }
}
</style>
