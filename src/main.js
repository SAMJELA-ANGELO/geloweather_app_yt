import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './components/SiteNavigation.vue'
import './components/BaseModal.vue'
import './components/AsynCityView.vue'
const app = createApp(App)

app.use(router)

app.mount('#app')
