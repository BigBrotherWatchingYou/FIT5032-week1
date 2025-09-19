import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimeVue from 'primevue/config';
import Aura from "@primeuix/themes/aura";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import router from './router'
import Bhedaer from './components/Bheader.vue';
import Bheader from './components/Bheader.vue';
import Booklist from './components/Booklist.vue';

const app = createApp(App);
app.use(PrimeVue,{
    theme: {
        preset:Aura
    }
});

app.use(router);
app.component('Booklist', Booklist);
app.component('Bheader', Bheader);

app.mount('#app');

