import './App.css'
import './webc/webc.js'

import React, { useEffect } from 'react'

import logo from './logo.svg'

function App() {
	useEffect(() => {
		return () => {}
	}, [])

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
			<mfe-connector></mfe-connector>
		</div>
	)
}

export default App
