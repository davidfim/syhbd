import { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MusicContext } from './MusicContext'
import Invitation from './pages/Invitation'
import Wishes from './pages/Wishes'
import Game from './pages/Game'
import Dinner from './pages/Dinner'
import './App.css'

const YOUTUBE_MUSIC_URL = 'https://www.youtube.com/watch?v=4UYbPEcg4C0'

function getYoutubeVideoId(url) {
  if (!url) return null
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') return u.pathname.slice(1).split('?')[0]
    return u.searchParams.get('v')
  } catch {
    return null
  }
}

// Basename for GitHub Pages: use first path segment (repo name) so it works at .../syhbd/ or .../syaibd/
function getBasename() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const segments = path.split('/').filter(Boolean)
  if (segments.length >= 1) return `/${segments[0]}/`
  return '/'
}

function App() {
  const playerRef = useRef(null)
  const containerRef = useRef(null)
  const [apiReady, setApiReady] = useState(false)

  const playMusic = useCallback(() => {
    if (playerRef.current?.playVideo) {
      playerRef.current.playVideo()
    }
  }, [])

  // Load YouTube IFrame API and create player
  useEffect(() => {
    const videoId = getYoutubeVideoId(YOUTUBE_MUSIC_URL)
    if (!videoId) return

    if (window.YT?.Player) {
      if (!containerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
        },
        events: { onReady: () => setApiReady(true) },
      })
      return
    }

    const previousCallback = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.()
      if (!containerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
        },
        events: { onReady: () => setApiReady(true) },
      })
    }

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
    }

    return () => {
      window.onYouTubeIframeAPIReady = previousCallback
    }
  }, [])

  // Try to autoplay when API is ready (may be blocked until user interaction)
  useEffect(() => {
    if (apiReady) playMusic()
  }, [apiReady, playMusic])

  return (
    <MusicContext.Provider value={playMusic}>
      <div
        ref={containerRef}
        className="youtube-audio-container"
        aria-hidden="true"
      />
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
