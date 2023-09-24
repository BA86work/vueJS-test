import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { router } from "./router";
import PrimeVue from "primevue/config";

import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Rating from "primevue/rating";
import SplitButton from "primevue/splitbutton";
import Steps from "primevue/steps";
import TieredMenu from "primevue/tieredmenu";

import "primevue/resources/themes/lara-dark-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.use(Steps);
app.use(router);
app.component("Toast", Toast);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Rating", Rating);
app.component("SplitButton", SplitButton);
app.component("Steps", Steps);
app.component("TieredMenu", TieredMenu);
app.mount("#app");
