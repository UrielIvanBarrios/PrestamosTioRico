import { BANNER, CTA, MARCA } from '../config'
import Placeholder from './Placeholder'

// Banner a todo el ancho, sin texto encima. El texto y los botones van debajo, centrados.
function Banner() {
  return (
    <section className="hero">
      {BANNER.imagen ? (
        <img src={BANNER.imagen} alt={`Préstamos ${MARCA.nombre}`} className="hero-banner" />
      ) : (
        <Placeholder titulo="Imagen del banner" detalle="Formato apaisado 1600 × 666" className="hero-banner" />
      )}
      <div className="container hero-text">
        <span className="eyebrow">{BANNER.eyebrow}</span>
        <h1>{BANNER.titulo}</h1>
        <p className="lead">{BANNER.texto}</p>
        <div className="hero-actions">
          <a href={CTA.href} className="btn btn-primary">Quiero mi préstamo</a>
          <a href="#requisitos" className="btn btn-outline">Ver requisitos</a>
        </div>
      </div>
    </section>
  )
}

export default Banner
