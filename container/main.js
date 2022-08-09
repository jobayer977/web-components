// Create a class for the element
class Mfe extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.mountMfe()
	}
	mountMfe() {
		// Svelte JS
		const app = document.createElement('div')
		app.id = 'app'

		const style = document.createElement('link')
		style.rel = 'stylesheet'
		style.href = '../svelte-mfe/dist/assets/index.3635012e.css'

		const script = document.createElement('script')
		script.src = '../svelte-mfe/dist/assets/index.925a890d.js'
		script.type = 'module'

		this.shadowRoot.appendChild(app)
		this.shadowRoot.appendChild(style)
		this.shadowRoot.appendChild(script)
	}
}
// Define the new element
customElements.define('mfe-connector', Mfe)
