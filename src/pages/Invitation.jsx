import { useNavigate } from 'react-router-dom'

export default function Invitation() {
  const navigate = useNavigate()

  return (
    <div className="page invitation-page">
      {/* Cute floating decorations */}
      <div className="invitation-decorations" aria-hidden="true">
        <span className="deco deco-heart deco-1">♥</span>
        <span className="deco deco-heart deco-2">♥</span>
        <span className="deco deco-sparkle deco-3">✦</span>
        <span className="deco deco-sparkle deco-4">✦</span>
        <span className="deco deco-heart deco-5">♥</span>
        <span className="deco deco-sparkle deco-6">✦</span>
      </div>

      <div className="invitation-card">
        <p className="invitation-subtitle">Dear</p>
        <h1 className="invitation-title">Syaina Nur Fauziyah</h1>
        <button
          type="button"
          className="btn btn-primary invitation-btn"
          onClick={() => navigate('/wishes')}
        >
          Open invitation
        </button>
      </div>
    </div>
  )
}
