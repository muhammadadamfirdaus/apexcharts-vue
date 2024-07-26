import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import VueApexCharts from "vue3-apexcharts";

// createApp(App).mount("#app");

const app = createApp(App);
app.use(VueApexCharts);
app.mount("#app");
