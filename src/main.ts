import { createApp } from 'vue';
import VCalendar from 'v-calendar';
import App from './App.vue';

const app = createApp(App);
app.use(VCalendar);
app.mount('#app');
