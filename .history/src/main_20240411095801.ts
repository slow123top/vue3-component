import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// import router from "./router";

import BeaUI,{BeaModal} from "../dist/bea-ui.umd.cjs";
const app = createApp(App);
app.use(BeaUI);
app.use(createPinia());
// app.use(router);

app.mount("#app");
