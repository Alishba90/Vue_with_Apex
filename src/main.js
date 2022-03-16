import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
import VueApexCharts from "vue3-apexcharts";
import ColorInput from 'vue-color-input'
import mitt from 'mitt';

dom.watch();


const emitter = mitt();

const app=createApp(App);
app.config.globalProperties.
emitter = emitter;


app.use(ColorInput);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component('ColorInput', ColorInput);
app.mount('#app');
app.use(VueApexCharts);

