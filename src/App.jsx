import { useCallback, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MusicContext } from './MusicContext'
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
  const audioRef = useRef(null)

  const playMusic = useCallback(() => {
    const audio = audioRef.current
    if (audio) {
      audio.play().catch(() => {})
    }
  }, [])

  // Try to autoplay as soon as page opens (may be blocked by browser until user interaction)
  useEffect(() => {
    playMusic()
  }, [playMusic])

  const base = import.meta.env.BASE_URL
  const songSrc = `${base}song.mp3`

  return (
    <MusicContext.Provider value={playMusic}>
      <audio ref={audioRef} src={songSrc} loop preload="auto" />
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
    </MusicContext.Provider>
  )
}

export default App
