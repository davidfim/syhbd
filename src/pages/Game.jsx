import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WORDS = [
  'Sehat selaluu', 'Makin Jago Masak', 'Makin Jago ...', 'Dewa ngoding', 'Being best FE tech lead', 'KAYA RAYA',
  '100k Follower Tiktok', 'Makin banyak endoresan', 'Body goal!', 'Turun 10kg', 'Makin HOTTTYY', 'Makin Bijak',
  'Makin berpikiran dewasa', 'BELANDA HERE WE GO', 'IELTS 9.5', 'Selalu bahaagiaaaa <3', 'Cammmtikk', 'Diberkatii',
  'Makin berdedikasi', 'Tidak malas malasan', 'Semua yang dilakukan berhasil', 'Rajin olahraga!', 'Rajin Ngonten', 'Rambut makin badai!',
  'OTOT KUAT!', 'Hourglassssss', 'Membanggakan semua orang tersayang','Makin dicintai orang orang', 'Bahagia disetiap detik aktifitas', 'Iphone 18 Pro Max', 'BYD Atto 1', 'BYD Seal', 'Dapet aku jadi suami', 'Semua anggota tubuh sehat','Makan enak selalu',
]

function shuffleArray(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const MAX_SELECT = 3

export default function Game() {
  const navigate = useNavigate()
  const [shuffledWords] = useState(() => shuffleArray(WORDS))
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [allSelected, setAllSelected] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (selectedIds.size === MAX_SELECT) {
      setAllSelected(true)
      setShowPopup(true)
    }
  }, [selectedIds.size])

  const toggleWord = useCallback((id) => {
    if (allSelected) return

    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else if (next.size < MAX_SELECT) {
        next.add(id)
      }
      return next
    })
  }, [allSelected])

  const displayAllSelected = allSelected

  return (
    <div className="page game-page">
      <div className="page-decorations" aria-hidden="true">
        <span className="deco deco-heart deco-1">♥</span>
        <span className="deco deco-sparkle deco-2">✦</span>
        <span className="deco deco-heart deco-3">♥</span>
        <span className="deco deco-sparkle deco-4">✦</span>
        <span className="deco deco-heart deco-5">♥</span>
        <span className="deco deco-sparkle deco-6">✦</span>
      </div>
      <div className="page-card game-card">
        <p className="game-instruction content-animate">Think about it deeply. Choose 3 things yang kamu mau achieve di umur 27 ini sayang</p>
        <div className="word-grid content-animate-delay-1">
          {shuffledWords.map((word, i) => (
            <button
              key={i}
              type="button"
              className={`word-chip ${displayAllSelected || selectedIds.has(i) ? 'selected' : ''}`}
              onClick={() => toggleWord(i)}
            >
              {word}
            </button>
          ))}
        </div>
        {displayAllSelected && (
          <button
            type="button"
            className="btn btn-primary content-animate-delay-2"
            onClick={() => navigate('/dinner')}
          >
            Continue
          </button>
        )}
      </div>

      {showPopup && (
        <div className="game-popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="game-popup" onClick={(e) => e.stopPropagation()}>
            <p className="game-popup-text">3?! OF COURSE I WISH ALL OF THIS THINGS WILL HAPPEN TO YOU SOON ♥♥♥</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowPopup(false)}
            >
              Haha okay
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
