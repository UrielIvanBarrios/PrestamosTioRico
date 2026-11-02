import { useState } from 'react'
import { GALERIA } from '../config'
import Selector from './Selector'
import Carrusel from './Carrusel'

// Solo se muestran las pestañas que tienen items.
const PESTANIAS = GALERIA.filter((p) => p.items.length > 0)
const OPCIONES = PESTANIAS.map((p) => ({ clave: p.clave, texto: p.titulo }))
const PANEL_ID = 'galeria-panel'

function Galeria() {
  const [clave, setClave] = useState(PESTANIAS[0]?.clave)
  const pestania = PESTANIAS.find((p) => p.clave === clave)

  if (!pestania) return null

  return (
    <section id="galeria" className="section">
      <div className="container">
        <h2>Conocé Tío Rico</h2>
        <Selector opciones={OPCIONES} valor={clave} onCambiar={setClave} panelId={PANEL_ID} label="Galería" />
        <div id={PANEL_ID} role="tabpanel" aria-labelledby={`${PANEL_ID}-tab-${clave}`}>
          <Carrusel key={clave} items={pestania.items} />
        </div>
      </div>
    </section>
  )
}

export default Galeria
