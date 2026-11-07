import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main>
      <p className="eyebrow">Vite + Bun</p>
      <h1>Welcome to React</h1>
      <p>Your React application is ready to build.</p>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
