import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Invitation from './pages/Invitation'
import Wishes from './pages/Wishes'
import Game from './pages/Game'
import Dinner from './pages/Dinner'
import './App.css'

// Basename for GitHub Pages: use first path segment (repo name) so it works at .../syhbd/ or .../syaibd/
function getBasename() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const segments = path.split('/').filter(Boolean)
  if (segments.length >= 1) return `/${segments[0]}/`
  return '/'
}

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Invitation />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/game" element={<Game />} />
          <Route path="/dinner" element={<Dinner />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
