// Recuadro punteado que ocupa el lugar de una imagen que todavía no pasaron.
function Placeholder({ titulo, detalle, className = '' }) {
  return (
    <div className={`placeholder ${className}`}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5-5-9 9" />
      </svg>
      <strong>{titulo}</strong>
      {detalle && <small>{detalle}</small>}
    </div>
  )
}

export default Placeholder
