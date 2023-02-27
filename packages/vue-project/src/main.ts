import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerMicroApps, start } from 'qiankun';
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 注册子应用
registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:7100',
    container: '#subapp-container',
    activeRule: '/react',
  },
])

// 启动 qiankun
start()