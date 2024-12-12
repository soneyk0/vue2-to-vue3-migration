import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createApp} from "vue";
import store from "./store";

createApp(App).use(store).mount('#app')
