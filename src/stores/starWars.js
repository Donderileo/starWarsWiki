import { defineStore } from "pinia";
import { getDataFromAPI } from "@/services/api.service.js";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const starWarsStore = defineStore("starWars", {
  state: () => {
    return {
      characters: [],
      next: "https://swapi.dev/api/people",
      quantity: 0,
      films: {},
      homeworlds: {},
      species: {},
      vehicles: {},
      starships: {},
      busy: false,
    };
  },
  actions: {
    async getMoreCharacters() {
      if (!this.next) {
        return;
      }
      this.busy = true;
      const data = await getDataFromAPI(this.next);
      this.next = data.next;
      const results = data.results;
      results.forEach((ch) => {
        this.quantity++;
        this.quantity == 17 ? this.quantity++ : "";
        ch.id = this.quantity;
      });
      this.characters = this.characters.concat(results);
      this.busy = false;
    },
    async checkFilms(films) {
      for (let i = 0; i < films.length; i++) {
        if (!this.films[films[i]]) {
          this.films[films[i]] = await getDataFromAPI(films[i]);
        }
      }
    },
    async checkHomeworld(homeworld) {
      if (!this.homeworlds[homeworld]) {
        this.homeworlds[homeworld] = await getDataFromAPI(homeworld);
      }
    },
    async checkSpecies(species) {
      for (let i = 0; i < species.length; i++) {
        if (!this.species[species[i]]) {
          this.species[species[i]] = await getDataFromAPI(species[i]);
        }
      }
    },
    async checkVehicles(vehicles) {
      for (let i = 0; i < vehicles.length; i++) {
        if (!this.vehicles[vehicles[i]]) {
          this.vehicles[vehicles[i]] = await getDataFromAPI(vehicles[i]);
        }
      }
    },
    async checkStarships(starships) {
      for (let i = 0; i < starships.length; i++) {
        if (!this.starships[starships[i]]) {
          this.starships[starships[i]] = await getDataFromAPI(starships[i]);
        }
      }
    },
  },
});
