import './assets/main.css'
import App from './App.vue';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Card from 'primevue/card';





import i18n from './locale/i18n.js';


const app = createApp(App);
app.use(i18n);
app.use(PrimeVue);
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card);

app.mount('#app');