import { useState } from 'react'
import { MARCA, NAV_LINKS, CTA } from '../config'

function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <header className="navbar">
      <nav className="container navbar-inner" aria-label="Principal">
        <a href="#" className="brand" onClick={cerrar}>
          {MARCA.logo ? (
            <img src={MARCA.logo} alt="" className="brand-logo" />
          ) : (
            <span className="brand-logo brand-logo--placeholder" aria-hidden="true">LOGO</span>
          )}
          <span className="brand-name">{MARCA.nombre}</span>
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={abierto}
          aria-controls="navbar-menu"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setAbierto(!abierto)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {abierto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <div id="navbar-menu" className={`navbar-links${abierto ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={cerrar}>
              {link.texto}
            </a>
          ))}
          <a href={CTA.href} className="btn btn-primary" onClick={cerrar}>
            {CTA.texto}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
