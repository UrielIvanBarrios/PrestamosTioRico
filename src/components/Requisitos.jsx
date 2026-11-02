import { REQUISITOS } from '../config'

const TARJETAS = [
  {
    clave: 'recibo',
    titulo: 'Con recibo de sueldo',
    icono: (
      <>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6" />
        <path d="M8 13h8M8 17h5" />
      </>
    ),
  },
  {
    clave: 'fisica',
    titulo: 'Con garantía física',
    icono: (
      <>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
  },
]

function Requisitos() {
  return (
    <section id="requisitos" className="section band">
      <div className="container">
        <div>
          <h2>Requisitos</h2>
          <p className="section-sub">Elegí la opción que va con vos.</p>
        </div>
        <div className="req-grid">
          {TARJETAS.map((t) => (
            <div key={t.clave} className="req-card">
              <div className="req-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {t.icono}
                </svg>
              </div>
              <h3>{t.titulo}</h3>
              <ul>
                {REQUISITOS[t.clave].map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Requisitos
