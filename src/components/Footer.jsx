import { INSTAGRAM, MARCA, WHATSAPP } from '../config'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <strong>{MARCA.nombre}</strong>
        <div className="footer-links">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp: +{WHATSAPP}</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="footer-icono" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
