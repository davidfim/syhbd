import { useNavigate } from 'react-router-dom'

export default function Wishes() {
  const navigate = useNavigate()

  return (
    <div className="page wishes-page">
      <div className="page-decorations" aria-hidden="true">
        <span className="deco deco-heart deco-1">♥</span>
        <span className="deco deco-sparkle deco-2">✦</span>
        <span className="deco deco-heart deco-3">♥</span>
        <span className="deco deco-sparkle deco-4">✦</span>
        <span className="deco deco-heart deco-5">♥</span>
        <span className="deco deco-sparkle deco-6">✦</span>
      </div>
      <div className="page-card">
        <h2 className="wishes-title content-animate">Happy 27th Birthday Saayaang! ♥</h2>
        <div className="content-block content-block-long placeholder content-animate-delay-1">
            Of course i will talk about later but for now wishing my favorite person happiest birthday! its 27. The big moment in your life. Aku mendoakan semua yang terbaik buat kamu. And the most important thing is, I love you so much ♥♥♥ 
        </div>
        <button
          type="button"
          className="btn btn-secondary content-animate-delay-2"
          onClick={() => navigate('/game')}
        >
          Next
        </button>
      </div>
    </div>
  )
}
