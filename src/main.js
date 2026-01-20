import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const ensureNetfunnelScript = () => {
  const existing = document.querySelector(
    'script[src="https://agent-lib.stclab.com/agents/client/javascript/netfunnel-javascript-agent.js"]'
  )
  if (existing) return

  const scriptNF = document.createElement('script')
  scriptNF.setAttribute('data-nf-client-id', 'suppor-3614')
  scriptNF.src = 'https://agent-lib.stclab.com/agents/client/javascript/netfunnel-javascript-agent.js'
  document.head.appendChild(scriptNF)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.isReady().then(() => {
  ensureNetfunnelScript()
})

app.mount('#app')
