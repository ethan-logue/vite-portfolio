import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CursorContextProvider from './components/cursor/CursorContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CursorContextProvider>
			<App />
		</CursorContextProvider>
	</React.StrictMode>,
)
