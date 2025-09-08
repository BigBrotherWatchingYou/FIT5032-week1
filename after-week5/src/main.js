// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { initializeApp } from "firebase/app";
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'


const app = createApp(App)

//web app's App firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnrSn7JVtVeI5NRDR0xQUfVRZioFgUTfo",
    authDomain: "week7-junxiang.firebaseapp.com",
    projectId: "week7-junxiang",
    storageBucket: "week7-junxiang.firebasestorage.app",
    messagingSenderId: "663824614556",
    appId: "1:663824614556:web:b60e789fc4312c44c6d959",
    measurementId: "G-ZK0WGJL7FP"
};


// Initialize Firebase
initializeApp(firebaseConfig);
app.use(PrimeVue, { theme: { preset: Aura } })

// app.component('DataTable', DataTable)
// app.component('Column', Column)
app.use(router)
app.mount('#app')
