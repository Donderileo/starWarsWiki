import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import ProgressSpinner from "primevue/progressspinner";

const app = createApp(App);
app.use(PrimeVue);
app.use(createPinia());
app.use(router);

app.component("ProgressSpinner", ProgressSpinner);
app.mount("#app");
