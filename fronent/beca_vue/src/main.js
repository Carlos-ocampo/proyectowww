import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import './index.css' // index css
import router from './router'



// // Instance app
// const app = createApp(App)
// // integrate route
// app.use(router)
// // integrate axios
// app.use(VueAxios, axios)
// app.mount('#app')

createApp(App)// Instance app
.use(router)// integrate route
.use(VueAxios, axios)// integrate axios
.mount('#app')// mount