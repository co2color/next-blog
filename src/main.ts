import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@unocss/reset/tailwind.css'
import './assets/main.css'
import 'uno.css'
import './plugins/ge'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
