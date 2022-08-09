import './app.css'

import App from './App.svelte'

const mfe = true

const mfeTarget = document
	.querySelector('mfe-connector')
	?.shadowRoot?.getElementById('svelte-app')

const devTarget = document.getElementById('svelte-app')

const app = new App({
	target: mfe ? mfeTarget : devTarget,
})

export default app
