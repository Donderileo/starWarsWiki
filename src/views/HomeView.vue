<template>
  <div class="container">
    <Header text="Lista de personagens" />
    <main>
      <div class="cards" ref="scrollComponent">
        <div
          class="card"
          v-for="character in store.characters"
          :key="character.name"
        >
          <Card
            :character="character"
            @click="goToDetails(character.id)"
          ></Card>
        </div>
        <div v-for="index in 10" :key="index" v-if="store.busy">
          <ProgressSpinner />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import { starWarsStore } from "@/stores/starWars.js";
import { useRouter } from "vue-router";
import Header from "@/components/Header.vue";
import Card from "../components/Card.vue";
export default {
  components: {
    Header,
    Card,
  },
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

<style lang="scss" scoped>
.container {
  @media (min-width: $medium) {
    padding: 0 3rem;
  }
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  color: $white;
  transition: 0.3s ease all;
  .card:hover {
    box-shadow: 0 4px 8px rgb(255 218 0 / 20%), 0 16px 32px rgb(255 218 0 / 80%);
  }
  @media (min-width: $mobile) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: $small) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: $medium) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>
