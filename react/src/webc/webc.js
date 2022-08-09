// Create a class for the element
export class WebC extends HTMLElement {
	constructor() {
		console.log('WebC:Bootstrap', '%c🚀', 'color: #ffc107; font-size: 1.5rem;')
		super()
		this.attachShadow({ mode: 'open' })
		this.mountMfe()
	}
	mountMfe() {
		// Svelte JS
		const app = document.createElement('div')
		app.id = 'svelte-app'

		const style = document.createElement('link')
		style.rel = 'stylesheet'
		style.href = './dist/assets/index.3635012e.css'

		const script = document.createElement('script')
		script.src = './dist/assets/index.3c6ea2f9.js'
		script.type = 'module'

		this.shadowRoot.appendChild(app)
		this.shadowRoot.appendChild(style)
		this.shadowRoot.appendChild(script)
	}
}
// Define the new element
customElements.define('mfe-connector', WebC)
