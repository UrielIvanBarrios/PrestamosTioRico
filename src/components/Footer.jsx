import { MARCA, WHATSAPP } from '../config'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <strong>{MARCA.nombre}</strong>
        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp: +{WHATSAPP}</a>
      </div>
    </footer>
  )
}

export default Footer
