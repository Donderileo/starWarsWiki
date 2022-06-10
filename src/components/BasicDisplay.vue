<template>
  <div class="item">
    <img :src="`/icons/${icon}.png`" alt="" />
    <span class="key">{{ key_ }}:</span>
    <span class="value" v-if="value">{{ value }} {{ measure }}</span>
    <span v-else>n/a</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { starWarsStore } from "@/stores/starWars.js";

export default defineComponent({
  name: "BasicDisplay",
  props: {
    key_: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    measure: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const store = starWarsStore();
    return { store };
  },
});
</script>

<style scoped lang="scss">
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
</style>
