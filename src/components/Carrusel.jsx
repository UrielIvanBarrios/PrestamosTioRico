import { useEffect, useRef, useState } from 'react'
import Placeholder from './Placeholder'
import Imagen from './Imagen'

// Distancia entre el inicio de un item y el siguiente (ancho + separación).
function medirPaso(pista) {
  const item = pista.firstElementChild
  return item.offsetWidth + parseFloat(getComputedStyle(pista).columnGap || 0)
}

// Imagen o video vertical. Si el archivo no existe (todavía no lo cargaron) muestra el placeholder.
function Medio({ tipo, src, poster, alt }) {
  const [falta, setFalta] = useState(false)

  if (tipo !== 'video') {
    return <Imagen src={src} alt={alt} className="galeria-medio" />
  }
  if (falta) {
    return <Placeholder titulo={alt} detalle={`Falta el archivo ${src}`} className="galeria-medio" />
  }
  return (
    <video
      className="galeria-medio"
      src={src}
      poster={poster}
      aria-label={alt}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setFalta(true)}
    />
  )
}

// Carrusel horizontal con scroll-snap: 3 items visibles en desktop, 2 en tablet, 1 en celular.
// Al cambiar de pestaña se monta de nuevo (key en Galeria), así vuelve al inicio.
function Carrusel({ items }) {
  const pista = useRef(null)
  // actual: primer item visible. posiciones: cuántos lugares de scroll hay (cambia con el ancho de pantalla).
  const [estado, setEstado] = useState({ actual: 0, posiciones: 1 })

  useEffect(() => {
    const el = pista.current
    const actualizar = () => {
      const paso = medirPaso(el)
      // Cuántos entran a la vez lo define el CSS (--visibles: 3 desktop, 2 tablet, 1 celular).
      const visibles = parseInt(getComputedStyle(el).getPropertyValue('--visibles')) || 1
      const posiciones = Math.max(1, items.length - visibles + 1)
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
  }, [items.length])

  const mover = (dir) => pista.current.scrollBy({ left: dir * medirPaso(pista.current), behavior: 'smooth' })
  const irA = (i) => pista.current.scrollTo({ left: i * medirPaso(pista.current), behavior: 'smooth' })
  const { actual, posiciones } = estado
  // Si entran todos los items no hay nada que desplazar: se centran y se ocultan flechas y puntitos.
  const entranTodos = posiciones === 1

  return (
    <div className="carrusel">
      <div className={`carousel${entranTodos ? ' is-completo' : ''}`}>
        {!entranTodos && (
          <button type="button" className="carousel-btn" onClick={() => mover(-1)} disabled={actual === 0} aria-label="Anteriores">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
        )}
        <div className="carousel-track" ref={pista}>
          {items.map((item) => (
            <div key={item.src} className="carousel-item">
              <Medio {...item} />
            </div>
          ))}
        </div>
        {!entranTodos && (
          <button type="button" className="carousel-btn" onClick={() => mover(1)} disabled={actual === posiciones - 1} aria-label="Siguientes">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        )}
      </div>
      {!entranTodos && (
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
  )
}

export default Carrusel
