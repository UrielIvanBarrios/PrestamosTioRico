import { useEffect, useRef, useState } from 'react'
import { RESENIAS } from '../config'
import Placeholder from './Placeholder'

// Sin capturas cargadas se muestran 3 placeholders.
const SLIDES = RESENIAS.length > 0 ? RESENIAS : [null, null, null]

// Distancia entre el inicio de una tarjeta y la siguiente (ancho + separación).
function medirPaso(pista) {
  const item = pista.firstElementChild
  return item.offsetWidth + parseFloat(getComputedStyle(pista).columnGap || 0)
}

function Resenias() {
  const pista = useRef(null)
  // actual: primera tarjeta visible. posiciones: cuántos lugares de scroll hay (cambia con el ancho de pantalla).
  const [estado, setEstado] = useState({ actual: 0, posiciones: 1 })

  useEffect(() => {
    const el = pista.current
    const actualizar = () => {
      const paso = medirPaso(el)
      const visibles = Math.max(1, Math.round((el.clientWidth + paso - el.firstElementChild.offsetWidth) / paso))
      const posiciones = Math.max(1, SLIDES.length - visibles + 1)
      const actual = Math.min(posiciones - 1, Math.round(el.scrollLeft / paso))
      setEstado((e) => (e.actual === actual && e.posiciones === posiciones ? e : { actual, posiciones }))
    }
    const observer = new ResizeObserver(actualizar)
    observer.observe(el)
    el.addEventListener('scroll', actualizar, { passive: true })
    return () => {
      observer.disconnect()
      el.removeEventListener('scroll', actualizar)
    }
  }, [])

  const mover = (dir) => pista.current.scrollBy({ left: dir * medirPaso(pista.current), behavior: 'smooth' })
  const irA = (i) => pista.current.scrollTo({ left: i * medirPaso(pista.current), behavior: 'smooth' })
  const { actual, posiciones } = estado

  return (
    <section id="resenas" className="section">
      <div className="container">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="carousel">
          <button type="button" className="carousel-btn" onClick={() => mover(-1)} disabled={actual === 0} aria-label="Reseñas anteriores">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="carousel-track" ref={pista}>
            {SLIDES.map((src, i) => (
              <div key={i} className="carousel-item">
                {src ? (
                  <img src={src} alt={`Captura de la reseña de un cliente (${i + 1} de ${SLIDES.length})`} loading="lazy" className="resenia" />
                ) : (
                  <Placeholder titulo={`Captura de reseña ${i + 1}`} detalle="Imagen vertical 9:16" className="resenia" />
                )}
              </div>
            ))}
          </div>
          <button type="button" className="carousel-btn" onClick={() => mover(1)} disabled={actual === posiciones - 1} aria-label="Reseñas siguientes">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
        {posiciones > 1 && (
          <div className="dots">
            {Array.from({ length: posiciones }, (_, i) => (
              <button
                key={i}
                type="button"
                className={`dot${i === actual ? ' active' : ''}`}
                onClick={() => irA(i)}
                aria-label={`Ir a la posición ${i + 1}`}
                aria-current={i === actual}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Resenias
