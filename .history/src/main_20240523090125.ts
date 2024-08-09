import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// import router from "./router";

// import BeaUI  from "./components/index";
const app = createApp(App);
app.use(BeaModal);
app.use(createPinia());
// app.use(router);
app.mount("#app");
