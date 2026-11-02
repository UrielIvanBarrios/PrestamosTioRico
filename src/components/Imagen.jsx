import { useState } from 'react'
import Placeholder from './Placeholder'

// <img> que muestra el placeholder punteado si el archivo no existe (todavía no lo cargaron).
function Imagen({ src, alt, className, loading = 'lazy' }) {
  const [falta, setFalta] = useState(!src)

  if (falta) {
    return <Placeholder titulo={alt} detalle={src ? `Falta el archivo ${src}` : 'Falta la imagen'} className={className} />
  }
  return <img src={src} alt={alt} loading={loading} className={className} onError={() => setFalta(true)} />
}

export default Imagen
