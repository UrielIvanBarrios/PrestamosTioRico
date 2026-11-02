import { INSTAGRAM, PRESENCIA } from '../config'
import Imagen from './Imagen'

// Desktop: foto a la izquierda y título + texto a la derecha. Celular: título, foto y texto, uno debajo del otro.
function Presencia() {
  return (
    <section id="presencia" className="section band">
      <div className="container">
        <div className="presencia">
          <h2 className="presencia-titulo">{PRESENCIA.titulo}</h2>
          <Imagen src={PRESENCIA.imagen} alt={PRESENCIA.alt} className="presencia-foto" />
          <div className="presencia-texto">
            <p className="lead">{PRESENCIA.texto}</p>
            <p className="presencia-zonas">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              {PRESENCIA.zonas}
            </p>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Seguinos en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presencia
