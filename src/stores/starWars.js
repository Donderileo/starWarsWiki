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
    };
  },
  actions: {
    async getMoreCharacters() {
      console.log("Called");
      const data = await getDataFromAPI(this.next);
      this.next = data.next;
      const results = data.results;
      results.forEach((ch) => {
        this.quantity++;
        this.quantity == 17 ? this.quantity++ : "";
        ch.id = this.quantity;
      });
      this.characters = this.characters.concat(results);
    },
    async checkFilms(films) {
      films.forEach(async (film) => {
        if (!this.films[film]) {
          this.films[film] = await getDataFromAPI(film);
        }
      });
    },
    async checkHomeworld(homeworld) {
      console.log(homeworld);
      if (!this.homeworlds[homeworld]) {
        this.homeworlds[homeworld] = await getDataFromAPI(homeworld);
      }
    },
    async checkSpecies(species) {
      species.forEach(async (specie) => {
        if (!this.species[specie]) {
          this.species[specie] = await getDataFromAPI(specie);
        }
      });
    },
    async checkVehicles(vehicles) {
      vehicles.forEach(async (vehicle) => {
        if (!this.vehicles[vehicle]) {
          this.vehicles[vehicle] = await getDataFromAPI(vehicle);
        }
      });
    },
    async checkStarships(starships) {
      starships.forEach(async (starship) => {
        if (!this.starships[starship]) {
          this.starships[starship] = await getDataFromAPI(starship);
        }
      });
    },
  },
});