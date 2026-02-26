export default function Dinner() {
  return (
    <div className="page dinner-page">
      <div className="page-decorations" aria-hidden="true">
        <span className="deco deco-heart deco-1">♥</span>
        <span className="deco deco-sparkle deco-2">✦</span>
        <span className="deco deco-heart deco-3">♥</span>
        <span className="deco deco-sparkle deco-4">✦</span>
        <span className="deco deco-heart deco-5">♥</span>
        <span className="deco deco-sparkle deco-6">✦</span>
      </div>
      <div className="page-card dinner-card">
        <h2 className="dinner-title content-animate">Inviting you to have birthday dinner </h2>
        <div className="dinner-details">
          <div className="dinner-detail content-animate-delay-1">
            <span className="dinner-detail-label">Hai Di Lao</span>
            <span className="dinner-detail-value placeholder">Grand Indonesia</span>
            <span className="dinner-detail-value placeholder">Friday 27 February 2026, 23:00 WIB</span>
          </div>
        </div>
      </div>
    </div>
  )
}
